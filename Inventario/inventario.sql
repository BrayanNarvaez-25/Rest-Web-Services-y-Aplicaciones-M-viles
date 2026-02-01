drop table if exists categorias,categorias_unidad_medida,
unidades_medida,producto,tipo_documento,proveedores,
estado_pedido, cabecera_pedido,detalle_pedido,
historial_stock,cabecera_ventas;
create table categorias(
	codigo_cat serial not null,
	nombre varchar(100) not null,
	categoria_padre int,
	constraint categorias_pk primary key(codigo_cat),
	constraint categorias_fk foreign key (categoria_padre)
	references categorias(codigo_cat)
);

insert into categorias(nombre,categoria_padre)
values('Materia Prima', null);
insert into categorias(nombre,categoria_padre)
values('Proteina', 1);
insert into categorias(nombre,categoria_padre)
values('Salsas', 1);
insert into categorias(nombre,categoria_padre)
values('Punto de venta', null);
insert into categorias(nombre,categoria_padre)
values('Bebidas', 4);
insert into categorias(nombre,categoria_padre)
values('Con Alcohol', 5);
insert into categorias(nombre,categoria_padre)
values('Sin Alcohol', 5);

select * from categorias;

create table categorias_unidad_medida(
	codigo_cudm char(1) not null,
	nombre varchar(100) not null,
	constraint categorias_cudm_pk primary key(codigo_cudm)
);

create table unidades_medida(
	codigo_udm varchar(50) not null,
	descripcion varchar(100) not null,
	categoria_udm char(1) not null,
	constraint unidades_medida_pk primary key(codigo_udm),
	constraint unidades_medida_fk foreign key(categoria_udm)
	references categorias_unidad_medida(codigo_cudm)
);

insert into categorias_unidad_medida(codigo_cudm,nombre)
values('U','Unidades');
insert into categorias_unidad_medida(codigo_cudm,nombre)
values('V','Volumen');
insert into categorias_unidad_medida(codigo_cudm,nombre)
values('P','Peso');

insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('ml','mililitros','V');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('l','litros','V');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('u','unidad','U');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('d','decena','U');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('g','gramos','P');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('kg','kilogramos','P');
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values('lb','libras','P');

select * from categorias_unidad_medida,unidades_medida;

create table producto(
	codigo_prod serial not null,
	nombre varchar(100) not null,
	codigo_udm varchar(50) not null,
	precio_venta money not null,
	tiene_iva boolean not null,
	coste money not null,
	categoria int not null,
	stock int not null,
	constraint codigo_prod_pk primary key (codigo_prod),
	constraint codigo_udm_fk foreign key (codigo_udm)
	references unidades_medida (codigo_udm),
	constraint categoria_fk foreign key (categoria)
	references categorias(codigo_cat)
);

insert into producto(nombre,codigo_udm,precio_venta,tiene_iva,coste,categoria,stock)
values('Coca cola pequeña','u',0.5804,true,0.3729,7,10);
insert into producto(nombre,codigo_udm,precio_venta,tiene_iva,coste,categoria,stock)
values('Salsa de tomate','kg',0.95,true,0.8736,3,10);

select * from producto;

create table tipo_documento(
	codigo_td char(1) not null,
	descripccion varchar(100) not null,
	constraint codigo_td_pk primary key (codigo_td)
);

create table proveedores(
	identificador varchar(13) not null,
	tipo_documento char(1) not null,
	nombre varchar(100) not null,
	telefono char(10) not null,
	correo varchar(50) not null,
	direccion varchar(100) not null,
	constraint identificador_pk primary key (identificador),
	constraint tipo_documento_fk foreign key (tipo_documento)
	references tipo_documento(codigo_td)
);

insert into tipo_documento(codigo_td,descripccion)
values('C','CEDULA');
insert into tipo_documento(codigo_td,descripccion)
values('R','RUC');

insert into proveedores(identificador,tipo_documento,nombre,telefono,correo,direccion)
values('1792295747','C','Santiago Mosquera','0992920306','zantycb89@gmail.com','Cumbayork');
insert into proveedores(identificador,tipo_documento,nombre,telefono,correo,direccion)
values('1292288574700','R','Snacks SA','0992920399','snacks@gmail.com','La Tola');

select * from tipo_documento,proveedores;

create table estado_pedido(
	codigo_ep char(1) not null,
	descripccion varchar(100) not null,
	constraint codigo_ep_pk primary key(codigo_ep)
);

create table cabecera_pedido(
	numero_pedido serial not null,
	proveedor varchar(13) not null,
	fecha date not null,
	estado char(1) not null,
	constraint numero_pedido_pk primary key (numero_pedido),
	constraint proveedor_fk foreign key(proveedor)
	references proveedores(identificador)
);

insert into estado_pedido(codigo_ep,descripccion)
values('S','Solicitado');
insert into estado_pedido(codigo_ep,descripccion)
values('R','Recibido');

insert into cabecera_pedido(proveedor,fecha,estado)
values('1792295747','30/11/2023','S');

select * from estado_pedido, cabecera_pedido;


create table detalle_pedido(
	codigo_dp serial not null,
	cabecera_pedido int not null,
	producto int not null,
	cantidad int not null,
	subtotal money not null,
	cantidad_recibida int not null,
	constraint codigo_dp_pk primary key(codigo_dp),
	constraint cabecera_pedido_fk foreign key (cabecera_pedido)
	references cabecera_pedido(numero_pedido),
	constraint producto_fk foreign key (producto)
	references producto(codigo_prod)
);

insert into detalle_pedido(cabecera_pedido,producto,cantidad,subtotal,cantidad_recibida)
values(1,1,100,37.29,10);
insert into detalle_pedido(cabecera_pedido,producto,cantidad,subtotal,cantidad_recibida)
values(1,2,50,11.8,10);

select * from detalle_pedido;

create table historial_stock(
	codigo_s serial not null,
	fecha TIMESTAMPTZ not null,
	referencia varchar(50) not null,
	producto int not null,
	cantidad int not null,
	constraint codigo_s_pk primary key(codigo_s),
	constraint producto_fk foreign key(producto)
	references producto(codigo_prod)
);

insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 19:59:08', 'Pedido 1', 1, 100 );
insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 19:59:08', 'Pedido 1', 2, 50 );

select * from historial_stock;

create table cabecera_ventas(
	codigo_cv serial not null,
	fecha TIMESTAMPTZ not null,
	total_sin_iva money not null,
	iva money not null,
	total money not null,
	constraint codigo_cv_pk primary key(codigo_cv)
);

insert into cabecera_ventas(fecha,total_sin_iva,iva,total)
values('20/11/2023 19:59:08',3.26,0.39,3.65);

select * from cabecera_ventas;

create table detalle_venta(
	codigo_dv serial not null,
	cabecera_venta int not null,
	producto int not null,
	cantidad int not null,
	precio_venta money not null,
	subtotal money not null,
	subtotal_con_iva money not null,
	constraint codigo_dv_pk primary key(codigo_dv),
	constraint cabecera_venta_fk foreign key(cabecera_venta)
	references cabecera_ventas(codigo_cv),
	constraint producto_fk foreign key (producto)
	references producto (codigo_prod)
);

insert into detalle_venta(cabecera_venta,producto,cantidad,precio_venta,subtotal,subtotal_con_iva)
values(1,1,5,0.58,2.9,3.25);
insert into detalle_venta(cabecera_venta,producto,cantidad,precio_venta,subtotal,subtotal_con_iva)
values(1,2,1,0.36,0.36,0.4);