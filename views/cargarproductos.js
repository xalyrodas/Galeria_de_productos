//index.js
import { productosApi } from "../services/api.js";
import { crearProductoCard } from "../moduls/producto.js";

async function mostrarProductos() {
    try {
        let datos = await productosApi();
        console.log(datos); // Verifica que los datos sean correctos
        todosLosProductos(datos);
    } catch (error) {
        console.error("Error: ", error);
    }
}

// ----------------------------------------------------------------------------------

function todosLosProductos(data) {
    let DOM = document.querySelector("#root");
    DOM.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos productos

    data.forEach(element => {
        console.log(element); // Verifica cada producto en la consola
        let card = crearProductoCard(element); // Pasamos el objeto completo
        DOM.appendChild(card);
    });
}

export { mostrarProductos };