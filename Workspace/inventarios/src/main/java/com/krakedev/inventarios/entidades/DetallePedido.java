package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class DetallePedido {
	
	private int codigo;
	private Pedido pedido;
	private Productos producto;
	private int cantidad;
	private BigDecimal subtotal;
	private int cantidadRecibida;
	
	public DetallePedido() {}

	public DetallePedido(int codigo, Pedido pedido, Productos producto, int cantidad, BigDecimal subtotal,
			int cantidadRecibida) {
		super();
		this.codigo = codigo;
		this.pedido = pedido;
		this.producto = producto;
		this.cantidad = cantidad;
		this.subtotal = subtotal;
		this.cantidadRecibida = cantidadRecibida;
	}



	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public Pedido getPedido() {
		return pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	

	public Productos getProducto() {
		return producto;
	}

	public void setProducto(Productos producto) {
		this.producto = producto;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public BigDecimal getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}

	public int getCantidadRecibida() {
		return cantidadRecibida;
	}

	public void setCantidadRecibida(int cantidadRecibida) {
		this.cantidadRecibida = cantidadRecibida;
	}

	@Override
	public String toString() {
		return "DetallePedido [codigo=" + codigo + ", pedido=" + pedido + ", producto=" + producto + ", cantidad="
				+ cantidad + ", subtotal=" + subtotal + ", cantidadRexibida=" + cantidadRecibida + "]";
	}
	
	
}
