package com.krakedev.inventarios.entidades;

import java.util.ArrayList;

public class Categoria {
	private int codigo;
	private String nombre;
	private Categoria categoriaPadre;
	private ArrayList<Categoria> listaCat;
	
	public Categoria() {}

	

	public Categoria(int codigo, String nombre, Categoria categoriaPadre) {
		super();
		this.codigo = codigo;
		this.nombre = nombre;
		this.categoriaPadre = categoriaPadre;
	}



	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Categoria getCategoriaPadre() {
		return categoriaPadre;
	}



	public void setCategoriaPadre(Categoria categoriaPadre) {
		this.categoriaPadre = categoriaPadre;
	}



	public ArrayList<Categoria> getListaCat() {
		return listaCat;
	}



	public void setListaCat(ArrayList<Categoria> listaCat) {
		this.listaCat = listaCat;
	}



	@Override
	public String toString() {
		return "Categorias [codigo=" + codigo + ", nombre=" + nombre + ", categoriaPadre=" + categoriaPadre + "]";
	}
	
	
}
