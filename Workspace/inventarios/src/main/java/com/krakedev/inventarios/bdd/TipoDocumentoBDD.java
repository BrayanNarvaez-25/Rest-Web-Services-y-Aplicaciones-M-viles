package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.TipoDocumento;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class TipoDocumentoBDD {
	public ArrayList<TipoDocumento> recuperarTiposDocumentos () throws KrakeDevException {
		ArrayList<TipoDocumento> tiposdocumentos = new ArrayList<TipoDocumento>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		TipoDocumento tipodocumento = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select codigo_td,descripccion from tipo_documento");
			rs = ps.executeQuery();
			
			while(rs.next()) {
				String codigo = rs.getString("codigo_td");
				String descripcion = rs.getString("descripccion");
				tipodocumento = new TipoDocumento(codigo,descripcion);
				tiposdocumentos.add(tipodocumento);
			}
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle: "+e.getMessage());
		}
		return tiposdocumentos;
	}
}
