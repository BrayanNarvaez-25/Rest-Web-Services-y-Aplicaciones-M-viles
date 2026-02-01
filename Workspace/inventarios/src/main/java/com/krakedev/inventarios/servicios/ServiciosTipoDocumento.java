package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.TipoDocumentoBDD;
import com.krakedev.inventarios.entidades.TipoDocumento;
import com.krakedev.inventarios.excepciones.KrakeDevException;

@Path("tiposdocumeto")
public class ServiciosTipoDocumento {

	@Path("rescuperar")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperarTiposDocumento() {
		TipoDocumentoBDD td = new TipoDocumentoBDD();
		ArrayList<TipoDocumento> tipoDocumento = null;
		try {
			tipoDocumento = td.recuperarTiposDocumentos();
			return Response.ok(tipoDocumento).build();
		} catch (KrakeDevException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
