package com.krakedev.inventarios.entidades;

public class UnidadesMedida {
	private String codigo;
	private String descripcion;
	private CategoriaUDM categoriaUDM;
	
	public UnidadesMedida() {}

	
	public UnidadesMedida(String codigo, String descripcion) {
		super();
		this.codigo = codigo;
		this.descripcion = descripcion;
	}



	public UnidadesMedida(String codigo, String descripcion, CategoriaUDM categoriaUDM) {
		super();
		this.codigo = codigo;
		this.descripcion = descripcion;
		this.categoriaUDM = categoriaUDM;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public CategoriaUDM getCategoriaUDM() {
		return categoriaUDM;
	}

	public void setCategoriaUDM(CategoriaUDM categoriaUDM) {
		this.categoriaUDM = categoriaUDM;
	}

	@Override
	public String toString() {
		return "UnidadesMedida [codigo=" + codigo + ", descripcion=" + descripcion + ", categoriaUDM=" + categoriaUDM
				+ "]";
	}
	
	
}
