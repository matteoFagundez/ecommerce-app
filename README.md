# E-commerce laboratorio RIA segunda entrega

Este repositorio tiene como principal objetivo, aplicar y reforzar los conocimientos obtenidos en la materia RIA, a través de la realización de una aplicación web de e-commerce, la cual cuenta con una pagina principal que muestra una lista de productos consumidos utilizando una public API llamada **Fake Store**, y otra segunda API llamada **Exchange-Rate**

- [# Fake Store API](https://fakestoreapi.com/)
- [# Exchange Rate API](https://www.exchangerate-api.com/)

## Pasos para levantar el proyecto

1.  Clonar este Repositorio en una maquina local
    ```
      git clone <URL REPO> .
    ```
2.  Pararse en directorio root del proyecto
    ```
      cd <directorio root>
    ```
3.  Instalar las dependencias del proyecto
    ```
    yarn
    ```
4.  Levantar el proyecto
    ```
     yarn dev --open
    ```

## UML diagrams

```mermaid
sequenceDiagram
Usuario ->> Aplicacion web: ListarProductos()
Aplicacion web->>FakeStoreApi: obtenerTodosLosProductos()
FakeStoreApi-->> Aplicacion web: :Producto[]
Aplicacion web-->> Usuario: :Producto[]
Note right of Aplicacion web: Producto: datos devueltos por la API

```

## Mockup de la Aplicación

![](https://cdn.discordapp.com/attachments/1241870931970752552/1250900636044886156/Password_reset_task_flow_example_-_Password_reset_task_flow_example.jpeg?ex=666c9f80&is=666b4e00&hm=6d066a260987a73f6b3be85cf412ebba98c1f7ec11cd70880fd8c06cdc57e8a8&=)
![](https://cdn.discordapp.com/attachments/1241870931970752552/1250901868960284732/image.png?ex=666ca0a6&is=666b4f26&hm=d511c76725976db47ccde8f035e7184bc79fc3b15362c809ebc8b1672ba4d4e1&)

## Historias de usuario:

• Historia de Usuario 1: Visualización de Catálogo de Productos

- Como usuario,
- quiero ver un catálogo de productos,
- para poder navegar y seleccionar productos de mi interés.

Criterios de Aceptación:

1. El usuario puede ver una lista de productos con sus imágenes, nombres y precios.
2. Cada producto debe tener una imagen de tamaño uniforme para una mejor visualización.
3. Las tarjetas de productos deben ser de tamaño uniforme y mostrar el nombre y el precio del producto.
4. El usuario puede hacer clic en un producto para ver más detalles.

• Historia de Usuario 2: Detalles del Producto

- Como usuario,
- quiero ver detalles específicos de un producto,
- para obtener más información antes de decidir una compra.

Criterios de Aceptación:

1. El usuario puede hacer clic en un producto desde el catálogo para ver una página de detalles del producto.
2. La página de detalles debe mostrar una imagen grande del producto, el nombre del producto, una descripción detallada y el precio.
3. El usuario debe tener una opción para regresar al catálogo de productos.

• Historia de Usuario 3: Conversión de Moneda

- Como usuario,
- quiero ver las cotizaciones de monedas actualizadas,
- para conocer el precio de los productos en diferentes monedas.

Criterios de Aceptación:

1. El usuario puede ver el precio del producto en diferentes monedas.
2. La página de detalles del producto debe incluir una sección para la conversión de moneda.
3. El usuario debe poder seleccionar una moneda diferente y ver el precio del producto convertido a la moneda seleccionada.
4. Las tasas de cambio deben ser obtenidas de una API pública de cotizaciones de monedas.

• Ejemplo de Implementación:
Estas historias de usuario guiarán el desarrollo de nuestra aplicación e-commerce, asegurando que se enfoque en la experiencia del usuario y en proporcionar la funcionalidad necesaria de manera clara y eficiente.
