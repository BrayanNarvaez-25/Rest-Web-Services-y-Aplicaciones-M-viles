select prov.identificador,prov.tipo_documento,
td.descripcion,prov.nombre,prov.telefono,
prov.correo,prov.direccion
from proveedores prov, tipo_documento td
where prov.tipo_documento = td.codigo_td
and upper(nombre) like '%SA%'

select codigo_td,descripccion from tipo_documento

select prod.codigo_prod, prod.nombre as nombre_producto, udm.codigo_udm as nombre_udm,
udm.descripcion as descripcion_udm,cast(prod.precio_venta as decimal(6,2)), prod.tiene_iva,
cast(prod.coste as decimal(5,4)),prod.categoria,cat.nombre as nombre_cat,prod.stock
from producto prod,unidades_medida udm, categorias cat
where prod.codigo_udm = udm.codigo_udm
and prod.categoria = cat.codigo_cat
and upper(prod.nombre) like '%M%'

select *
from producto prod,unidades_medida udm, categorias cat
where prod.codigo_udm = udm.codigo_udm
and prod.categoria = cat.codigo_cat

select * from producto

select * from cabecera_pedido
select * from detalle_pedido

update cabecera_pedido 
set estado = 'R' where numero_pedido = 1

update detalle_pedido
set cantidad_recibida = 30, subtotal = 20
where codigo_dp = 4

select * from historial_stock

select * from cabecera_ventas
select * from detalle_venta

update cabecera_ventas
set total_sin_iva = 30, iva = 20, total = 10
where codigo_cv = 2

update producto
set nombre = 'PASTA de tomate', codigo_udm = 'lb', 
precio_venta = 0.96, tiene_iva = false, coste = 0.8800,
categoria = 1, stock = 15
where codigo_prod = 2

select * from producto

select * from categorias

update categorias
set nombre = 'Carnes', categoria_padre = 2
where codigo_cat = 9 

select codigo_cat,nombre,categoria_padre
from categorias

select * from cabecera_pedido
select * from detalle_pedido

select cp.numero_pedido, prov.nombre,cp.fecha,cp.estado,
dp.codigo_dp, dp.cabecera_pedido, dp.producto, dp.cantidad,
dp.cantidad_recibida,dp.subtotal,prov.identificador,prov.tipo_documento,
td.descripcion,prov.nombre,prov.telefono,
prov.correo,prov.direccion
from proveedores prov, tipo_documento td, 
cabecera_pedido cp, detalle_pedido dp
where prov.tipo_documento = td.codigo_td
and upper(nombre) like '%SA%'

select * from estado_pedido
