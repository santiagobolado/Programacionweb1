/**************************/

// Array que representa los productos en el carrito
let productosEnCarrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
    // Simulación de agregar un producto al carrito
    // let nuevoProducto = "Producto añadido";
    // productosEnCarrito.push(nuevoProducto);

    // Mostrar un mensaje al usuario con el ID del producto
    alert("Producto añadido al carrito. ID: " + productoId);

    // También podrías realizar otras acciones relacionadas con agregar al carrito aquí
}

/**************************/

// Obtener referencia a los botones de compra
var botonesComprar = document.getElementsByClassName('btn-comprar');

// Agregar evento de clic a los botones de compra
for (var i = 0; i < botonesComprar.length; i++) {
  botonesComprar[i].addEventListener('click', agregarAlCarrito);
}

// Carrito de compras
var carrito = [];


function agregarAlCarrito() {
  var producto = {
    nombre: this.parentNode.querySelector('p').textContent,
    precio: parseFloat(this.parentNode.querySelector('.precio').textContent.slice(1)),
    cantidad: 1
  };

  // Verificar si el producto ya está en el carrito
  var productoExistente = carrito.find(function(item) {
    return item.nombre === producto.nombre;
  });

  if (productoExistente) {
    
    productoExistente.cantidad++;
  } else {
    
    carrito.push(producto);
  }

  actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
  var carritoBody = document.getElementById('carrito-body');
  var totalCarrito = document.getElementById('total-precio');
  var vaciarCarritoBtn = document.getElementById('vaciar-carrito');

  carritoBody.innerHTML = '';
  totalCarrito.textContent = '$0';

  for (var i = 0; i < carrito.length; i++) {
    var producto = carrito[i];
    var precioTotal = producto.precio * producto.cantidad;

    var fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td>$${precioTotal}</td>
      <td><button class="btn-eliminar" data-indice="${i}">Eliminar</button></td>
    `;

    carritoBody.appendChild(fila);
  }

  var total = carrito.reduce(function(acc, producto) {
    return acc + producto.precio * producto.cantidad;
  }, 0);

  totalCarrito.textContent = '$' + total.toFixed(2);

  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
  var botonesEliminar = document.getElementsByClassName('btn-eliminar');
  for (var j = 0; j < botonesEliminar.length; j++) {
    botonesEliminar[j].addEventListener('click', eliminarProducto);
  }
}


function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}


function eliminarProducto() {
  var indice = parseInt(this.dataset.indice);
  carrito.splice(indice, 1);
  actualizarCarrito();
}

// Inicializar el carrito
actualizarCarrito();