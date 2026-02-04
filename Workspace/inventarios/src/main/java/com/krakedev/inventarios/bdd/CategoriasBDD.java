package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Categoria;
import com.krakedev.inventarios.entidades.TipoDocumento;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class CategoriasBDD {
	
	public void insertar(Categoria categoria) throws KrakeDevException{
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into categorias(nombre,categoria_padre) "
					+ "values(?, ?)");
			ps.setString(1, categoria.getNombre());
			ps.setInt(2, categoria.getCategoriaPadre().getCodigo());
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
	
	public void actualizar(Categoria categoria) throws KrakeDevException{
		Connection con = null;
		PreparedStatement ps = null;
		
		try {
			con = ConexionBDD.obtenerConexion();
			con.setAutoCommit(false);
			ps = con.prepareStatement("update categorias "
					+ "set nombre = ?, categoria_padre = ? "
					+ "where codigo_cat = ? ");
			ps.setString(1, categoria.getNombre());
			ps.setInt(2, categoria.getCategoriaPadre().getCodigo());
			ps.setInt(3, categoria.getCodigo());
			ps.executeUpdate();
			
			con.commit();
			
		}catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new KrakeDevException("Error al actualizar. Detalle: "+e.getMessage());
		}catch (Exception e) {
		    try {
		        if (con != null) {
		            con.rollback();
		        }
		    } catch (SQLException ex) {
		        ex.printStackTrace();
		    }
		    throw e;
		}
	}
	
	public ArrayList<Categoria> recuperarCategorias () throws KrakeDevException {
		ArrayList<Categoria> categorias = new ArrayList<Categoria>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Categoria categoria = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select codigo_cat,nombre,categoria_padre "
					+ "from categorias");
			rs = ps.executeQuery();
			
			while(rs.next()) {
				int codigo = rs.getInt("codigo_cat");
				String nombre = rs.getString("nombre");
				int codigoPadre = rs.getInt("categoria_padre"); 
				Categoria categoriaPadre = null; 

				if (!rs.wasNull()) { 
				    categoriaPadre = new Categoria(); 
				    categoriaPadre.setCodigo(codigoPadre); 
				}

				categoria = new Categoria(codigo, nombre, categoriaPadre);
				categorias.add(categoria);
			}
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle: "+e.getMessage());
		}
		return categorias;
	}
}
