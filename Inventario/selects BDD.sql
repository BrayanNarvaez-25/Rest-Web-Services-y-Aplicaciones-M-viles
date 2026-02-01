select prov.identificador,prov.tipo_documento,td.descripccion,prov.nombre,prov.telefono,prov.correo,prov.direccion
from proveedores prov, tipo_documento td
where prov.tipo_documento = td.codigo_td
and upper(nombre) like '%SA%'

select codigo_td,descripccion from tipo_documento