// Función para añadir productos al carrito
function añadirAlCarrito(nombre, precio) {
    // Recuperar el carrito del localStorage o crear uno vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Crear el objeto del artículo
    let producto = {
        nombre: nombre,
        precio: precio
    };

    // Añadir el artículo al carrito
    carrito.push(producto);

    // Guardar el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador del carrito
    actualizarContadorCarrito();
}

// Función para actualizar el contador de artículos en el carrito
function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contador = carrito.length;

    // Actualizar el enlace de carrito con el número de artículos
    document.getElementById('carrito-enlace').innerText = `Ver Carrito (${contador})`;
}

// Función para ver el carrito (abrir el modal)
function verCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoDiv = document.getElementById('productos-carrito');
    carritoDiv.innerHTML = ''; // Limpiar el carrito antes de mostrarlo

    // Mostrar los productos en el carrito
    carrito.forEach((producto, index) => {
        carritoDiv.innerHTML += `
            <div>
                <span>${producto.nombre} - $${producto.precio}</span>
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            </div>
        `;
    });

    // Mostrar el carrito modal
    document.getElementById('carrito-modal').style.display = 'block';
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1); // Eliminar el producto

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la vista del carrito
    verCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    verCarrito(); // Actualizar la vista del carrito
}

// Función para confirmar la compra
function confirmarCompra() {
    document.getElementById('carrito-modal').style.display = 'none'; // Ocultar el carrito

    // Mostrar el mensaje de confirmación
    document.getElementById('mensaje-confirmacion').style.display = 'block';
}

// Función para cerrar el mensaje de confirmación
function cerrarMensaje() {
    document.getElementById('mensaje-confirmacion').style.display = 'none';
}

// Función para cerrar el carrito
function cerrarCarrito() {
    document.getElementById('carrito-modal').style.display = 'none';
}

// Asegurarse de que el carrito se muestre correctamente al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarContadorCarrito();
});


// Asegurarnos de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar siempre el mensaje de "¡FELICIDADES!" cuando la página cargue
    const mensajePremio = document.getElementById('mensaje-premio');
    mensajePremio.style.display = 'block';  // Mostrar el mensaje

    // Función para cerrar el mensaje cuando se haga clic en "Cerrar"
    const cerrarMensaje = document.getElementById('cerrar-mensaje');
    cerrarMensaje.addEventListener('click', function() {
        mensajePremio.style.display = 'none';  // Ocultar el mensaje
    });
});


