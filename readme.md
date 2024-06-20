# Desarrollo Backend proyecto final

Proyecto de API para ecommerce.


## Consignas cumplidas:
 Inicializar servidor en puerto 8080
 Conectar a la base en Mongo Atlas (Archivo .envcopia contiene las variables de entorno para dicha conexión)

 El servidor responde correctamente a las siguiente solicitudes:

- GET localhost:8080/api/products  (ver todos los productos, se puede aplicar limit, sort, page, filtrar por title) La respuesta está en el formato indicado por la consigna. Incluyendo los links a las paginas disponibles y la cantidad de paginas. 

- GET localhost:8080/api/products/:pid (Buscar un producto por id)
- POST localhost:8080/api/products/  (Crear un producto verificando que se cumplan todos los campos requeridos)
- PUT localhost:8080/api/products/:pid (Actualizar los datos de un producto - al actualizar se verifica que el ID no se cambie)
- DELETE localhost:8080/api/products/:pid (Borrar un producto)

- GET localhost:8080/api/carts/ (Ver todos los carritos creados)
- GET localhost:8080/api/carts/:cid (Buscar un carrito por ID)
- POST localhost:8080/api/carts/ (Crear un carrito nuevo vacio)
- POST localhost:8080/api/carts/:cid/product/:pid (Añadir un producto a un carrito, verificando si ya está en el mismo o no)
- PUT localhost:8080/api/carts/:cid (modificar el contenido del carrito)
- PUT localhost:8080/api/carts/:cid/product/:pid (Modificar la propiedad quantity de un producto dentro de un carrito)
- DELETE localhost:8080/api/carts/:cid/product/:pid (Eliminar un producto completamente del carrito)
- DELETE localhost:8080/api/carts/:cid (Vaciar un carrito)
- DELETE localhost:8080/api/carts/:cid/erase (Borrar completamente un carrito)



## Aclaraciones:
- Las vistas de handlebars muestran los productos y su paginación, asi como permite elegir cuantos productos a la vez se pueden visualizar. 
- Al cliquear en "ver detalle" se muestra una vista de producto unico siguiendo el id del mismo.


