let articulos = [
    {   
        tipo: "taza",
        nombre: "Taza Tortuga",
        descripción: "Azul con dibujo de una tortuga celeste",
        precio: 500
    },
    {
        tipo: "taza",
        nombre: "Taza Salamandra",
        descripción: "Rojo con dibujo de una salamandra con fuego en la cola",
        precio: 400
    },
    {
        tipo: "taza",
        nombre: "Taza Sapo",
        descripción: "Verde con dibujo de un sapo con una flor en la espalda",
        precio: 1000
    },
    {
        tipo: "tetera",
        nombre: "Tetera verde",
        descripción: "Grande verde",
        precio: 900
    },
    {
        tipo: "tetera",
        nombre: "Tetera violeta",
        descripción: "Violeta mediana",
        precio: 800
    },
    {
        tipo: "plato",
        nombre: "plato amarillo",
        descripción: "Amarillo con rayas",
        precio: 300
    },
    {
        tipo: "plato",
        nombre: "plato marron",
        descripción: "Marrón con circulos",
        precio: 200
    },
    {
        tipo: "plato",
        nombre: "plato celeste",
        descripción: "Celeste con ondas",
        precio: 400
    }
]


const contenedorProductos = document.getElementById("contenedor-productos");

function ActualizarLista(){
    contenedorProductos.innerHTML = ``
    for (const producto of articulos) {
        let column = document.createElement("div");
        column.className = "col-md-4 mt-3 ";
        column.id = `columna-${producto.id}`;
        column.innerHTML = `
            <div class="card">
                <p class="card-text">Tipo: <b>${producto.tipo}</b></p>
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text">Precio: <b>${producto.precio}</b></p>
                <p class="card-text">Descripción: <b>${producto.descripción}</b></p>
                </div>
            </div>`;
      
        contenedorProductos.append(column);
    }
}
