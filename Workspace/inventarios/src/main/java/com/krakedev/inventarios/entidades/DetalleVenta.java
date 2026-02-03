package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class DetalleVenta {
	private int codigo;
	private Ventas venta;
	private Productos producto;
	private int cantidad;
	private BigDecimal precioVenta;
	private BigDecimal subtotal;
	private BigDecimal subtotalConIva;
	
	public DetalleVenta() {}

	public DetalleVenta(int codigo, Ventas venta, Productos producto, int cantidad, BigDecimal precioVenta,
			BigDecimal subtotal, BigDecimal subtotalConIva) {
		super();
		this.codigo = codigo;
		this.venta = venta;
		this.producto = producto;
		this.cantidad = cantidad;
		this.precioVenta = precioVenta;
		this.subtotal = subtotal;
		this.subtotalConIva = subtotalConIva;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public Ventas getVenta() {
		return venta;
	}

	public void setVenta(Ventas venta) {
		this.venta = venta;
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

	public BigDecimal getPrecioVenta() {
		return precioVenta;
	}

	public void setPrecioVenta(BigDecimal precioVenta) {
		this.precioVenta = precioVenta;
	}

	public BigDecimal getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}

	public BigDecimal getSubtotalConIva() {
		return subtotalConIva;
	}

	public void setSubtotalConIva(BigDecimal subtotalConIva) {
		this.subtotalConIva = subtotalConIva;
	}

	@Override
	public String toString() {
		return "DetalleVenta [codigo=" + codigo + ", venta=" + venta + ", producto=" + producto + ", cantidad="
				+ cantidad + ", precioVenta=" + precioVenta + ", subtotal=" + subtotal + ", subtotalConIva="
				+ subtotalConIva + "]";
	}
	
	
}
