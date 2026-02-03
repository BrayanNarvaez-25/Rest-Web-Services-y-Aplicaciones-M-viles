package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

import com.krakedev.inventarios.entidades.DetalleVenta;
import com.krakedev.inventarios.entidades.Ventas;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class VentasBDD {
	
	public void insertar(Ventas venta) throws KrakeDevException{
		Connection con = null;
		PreparedStatement ps = null;
		PreparedStatement psDet = null;
		ResultSet rsClave = null;
		int codigoCabecera = 0;
		PreparedStatement psAc = null;
		PreparedStatement psHis = null;
		
		BigDecimal totalSinIva = BigDecimal.ZERO;
	    BigDecimal totalIva = BigDecimal.ZERO;
	    BigDecimal totalVenta = BigDecimal.ZERO;
		
		Date fechaActual = new Date();
		java.sql.Date fechaSQL = new java.sql.Date(fechaActual.getTime());
		Timestamp fechaHoraActual = new Timestamp (fechaActual.getTime());
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into cabecera_ventas(fecha,total_sin_iva,iva,total) "
					+ "values(?,?,?,?)",Statement.RETURN_GENERATED_KEYS);
			ps.setDate(1, fechaSQL);
			ps.setBigDecimal(2, BigDecimal.ZERO);
			ps.setBigDecimal(3, BigDecimal.ZERO);
			ps.setBigDecimal(4, BigDecimal.ZERO);
			
			ps.executeUpdate();
			
			rsClave = ps.getGeneratedKeys();
			
			if(rsClave.next()) {
				codigoCabecera = rsClave.getInt(1);
			}
			
			ArrayList<DetalleVenta> detallesVenta = venta.getDetalles();
			DetalleVenta det;
			for(int i = 0; i < detallesVenta.size();i++) {
				det = detallesVenta.get(i);
				psDet = con.prepareStatement("insert into detalle_venta(cabecera_venta,producto,cantidad,precio_venta,subtotal,subtotal_con_iva) "
						+ "values(?,?,?,?,?,?)");		
				psDet.setInt(1, codigoCabecera);
				psDet.setInt(2, det.getProducto().getCodigo());
				psDet.setInt(3, det.getCantidad());
				psDet.setBigDecimal(4, det.getProducto().getPrecioVenta());
				if(det.getProducto().isTieneIva() == true) {
					BigDecimal pv = det.getProducto().getPrecioVenta();
					BigDecimal cantidad = new BigDecimal(det.getCantidad());
					BigDecimal subtotal = pv.multiply(cantidad);
					psDet.setBigDecimal(5, subtotal);
					BigDecimal iva = new BigDecimal(1.12);
					BigDecimal subtotalConIva = subtotal.multiply(iva);
					psDet.setBigDecimal(6, subtotalConIva);
					totalSinIva = totalSinIva.add(subtotal);
					BigDecimal ivaDeEsteProducto = subtotalConIva.subtract(subtotal);
	                totalIva = totalIva.add(ivaDeEsteProducto);
					totalVenta = totalVenta.add(subtotalConIva);
					
				}else {
					BigDecimal pv = det.getProducto().getPrecioVenta();
					BigDecimal cantidad = new BigDecimal(det.getCantidad());
					BigDecimal subtotal = pv.multiply(cantidad);
					psDet.setBigDecimal(5, subtotal);
					psDet.setBigDecimal(6, subtotal);
					totalSinIva = totalSinIva.add(subtotal);
		
					totalVenta = totalVenta.add(subtotal);
				}
				psDet.executeUpdate();
				
				psAc = con.prepareStatement("update cabecera_ventas "
						+ "set total_sin_iva = ?, iva = ?, total = ? "
						+ "where codigo_cv = ?");
				psAc.setBigDecimal(1,totalSinIva);
				psAc.setBigDecimal(2, totalIva);
				psAc.setBigDecimal(3, totalVenta);
				psAc.setInt(4, codigoCabecera);
				
				psAc.executeUpdate();
				
				psHis = con.prepareStatement("insert into historial_stock(fecha,referencia,producto,cantidad)"
						+ "values(?,?,?,? )");
					psHis.setTimestamp(1, fechaHoraActual);
					psHis.setString(2, "Venta "+ codigoCabecera);
					psHis.setInt(3, det.getProducto().getCodigo());
					psHis.setInt(4, det.getCantidad()*-1);
				
					psHis.executeUpdate();
			}
			
		}catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new KrakeDevException("Error al insertar. Detalle: "+e.getMessage());
		}
	}
}
