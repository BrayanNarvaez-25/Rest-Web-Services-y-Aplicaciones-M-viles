package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Categoria;
import com.krakedev.inventarios.entidades.Productos;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.entidades.UnidadesMedida;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class ProductosBDD {
	public ArrayList<Productos> buscar(String subcadena) throws KrakeDevException {
		ArrayList<Productos> productos = new ArrayList<Productos>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Productos producto = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement(
					"select prod.codigo_prod, prod.nombre as nombre_producto, udm.codigo_udm as nombre_udm, "
					+ "udm.descripcion as descripcion_udm,cast(prod.precio_venta as decimal(6,2)), prod.tiene_iva, "
					+ "cast(prod.coste as decimal(5,4)),prod.categoria,cat.nombre as nombre_cat,prod.stock "
					+ "from producto prod,unidades_medida udm, categorias cat "
					+ "where prod.codigo_udm = udm.codigo_udm "
					+ "and prod.categoria = cat.codigo_cat "
					+ "and upper(prod.nombre) like ?");
			ps.setString(1, "%" + subcadena.toUpperCase() + "%");
			rs = ps.executeQuery();

			while (rs.next()) {
				
				int codigoProducto = rs.getInt("codigo_prod");
				String nombreProducto = rs.getString("nombre_producto");
				String nombreUnidadMedida = rs.getString("nombre_udm");
				String descripcionUnidadMedida = rs.getString("descripcion_udm");
				BigDecimal precioVenta = rs.getBigDecimal("precio_venta");
				boolean tieneIva = rs.getBoolean("tiene_iva");
				BigDecimal coste = rs.getBigDecimal("coste");
				int codigoCategoria = rs.getInt("categoria");
				String nombreCategoria = rs.getString("nombre_cat");
				int stock = rs.getInt("stock");
				
				UnidadesMedida udm = new UnidadesMedida();
				udm.setCodigo(nombreUnidadMedida);
				udm.setDescripcion(descripcionUnidadMedida);
				
				Categoria categoria = new Categoria();
				categoria.setCodigo(codigoCategoria);
				categoria.setNombre(nombreCategoria);
				
				producto = new Productos();
				producto.setCodigo(codigoProducto);
				producto.setNombre(nombreProducto);
				producto.setUnidadMedida(udm);
				producto.setPrecioVenta(precioVenta);
				producto.setTieneIva(tieneIva);
				producto.setCoste(coste);
				producto.setCategoria(categoria);
				producto.setStock(stock);
				
				productos.add(producto);
				
			}
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle: " + e.getMessage());
		}
		return productos;
	}
	
	public void insertar(Productos producto) throws KrakeDevException{
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into producto(nombre,codigo_udm,precio_venta,tiene_iva,coste,categoria,stock) "
					+ "values(?,?,?,?,?,?,?);");
			ps.setString(1, producto.getNombre());
			ps.setString(2, producto.getUnidadMedida().getCodigo());
			ps.setBigDecimal(3, producto.getPrecioVenta());
			ps.setBoolean(4, producto.isTieneIva());
			ps.setBigDecimal(5, producto.getCoste());
			ps.setInt(6, producto.getCategoria().getCodigo());
			ps.setInt(7, producto.getStock());
			ps.executeUpdate();
			
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
