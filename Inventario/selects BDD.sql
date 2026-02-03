select prov.identificador,prov.tipo_documento,td.descripccion,prov.nombre,prov.telefono,prov.correo,prov.direccion
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