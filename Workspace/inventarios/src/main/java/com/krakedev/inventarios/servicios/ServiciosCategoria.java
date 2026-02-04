package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.CategoriasBDD;
import com.krakedev.inventarios.bdd.PedidosBDD;
import com.krakedev.inventarios.bdd.TipoDocumentoBDD;
import com.krakedev.inventarios.entidades.Categoria;
import com.krakedev.inventarios.entidades.Pedido;
import com.krakedev.inventarios.entidades.TipoDocumento;
import com.krakedev.inventarios.excepciones.KrakeDevException;

@Path("categoria")
public class ServiciosCategoria {
	
	@Path("crear")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crear(Categoria categoria) {
		CategoriasBDD catBDD = new CategoriasBDD();
		try {
			catBDD.insertar(categoria);
			return Response.ok().build();
		}catch(KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("actualizar")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response actualizar(Categoria categoria) {
		System.out.println("Pedido Actualizado>>>>>"+categoria);
		CategoriasBDD cat = new CategoriasBDD();
		try {
			cat.actualizar(categoria);
			return Response.ok().build();
		} catch (KrakeDevException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("rescuperar")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperarCategorias() {
		CategoriasBDD td = new CategoriasBDD();
		ArrayList<Categoria> categoria = null;
		try {
			categoria = td.recuperarCategorias();
			return Response.ok(categoria).build();
		} catch (KrakeDevException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
