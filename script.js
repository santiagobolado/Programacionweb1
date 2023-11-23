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

let servicio = {};
let total = 0;


const precios = {
  // cocktails
  "Antropometria - $5000": 2200,
  'Fernet Branca - $2000': 2000,
  'Smirnoff Vodka - $1500':1500,
  'Absolut Vodka - $5000':5000,
};

function tuCompra(valorProd, producto) {
  if (servicio[producto]) {
    servicio[producto]++;
  } else {
    servicio[producto] = 1;
  }

  total += valorProd;

  mostrarCarrito();
  document.getElementById("suma_precio").textContent = "Total: $" + total;

  console.log(servicio);
  return total;
}

function mostrarCarrito() {
  const listaCarrito = document.getElementById("MuestraProductos");
  const tituloCarrito = document.getElementById("tituloCarrito");

  listaCarrito.innerHTML = "";

  for (let producto in servicio) {
    const cantidad = servicio[producto];

    const listItem = document.createElement("li");

    const botonIncrementar = document.createElement("button");
    botonIncrementar.textContent = "+";
    botonIncrementar.id="boton-incrementar";
    botonIncrementar.addEventListener("click", function () {
      incrementarCantidad(producto);
    });

    const botonDecrementar = document.createElement("button");
    botonDecrementar.textContent = "-";
    botonDecrementar.id="boton-decrementar";
    botonDecrementar.addEventListener("click", function () {
      decrementarCantidad(producto);
    });

    const textoProducto = document.createElement("span");
    textoProducto.textContent = `${cantidad} x ${producto}`;

    listItem.appendChild(textoProducto);
    listItem.appendChild(botonIncrementar);
    listItem.appendChild(botonDecrementar);

    listaCarrito.appendChild(listItem);
  }

  if (Object.keys(servicio).length > 0) {
    tituloCarrito.textContent = "Mi selección:";
  } else {
    tituloCarrito.textContent = "Aún no has seleccionado ningún producto";
  }
}

function incrementarCantidad(producto) {
  servicio[producto]++;
  total = calcularTotal();
  mostrarCarrito();
  document.getElementById("suma_precio").textContent = "Total: $" + total;
}

function decrementarCantidad(producto) {
  if (servicio[producto] > 0) {
    servicio[producto]--;
    total = calcularTotal();

    if (servicio[producto] === 0) {
      delete servicio[producto];
    }

    mostrarCarrito();
    document.getElementById("suma_precio").textContent = "Total: $" + total;
  }
  
  const tituloCarrito = document.getElementById("tituloCarrito");
  if (Object.keys(bebidas).length === 0) {
    tituloCarrito.textContent = "Se ha eliminado su selección";
  }
}


function calcularTotal() {
  let sum = 0;
  for (let producto in bebidas) {
    const cantidad = bebidas[producto];
    const precio = precios[producto];
    sum += cantidad * precio;
  }
  return sum;
}

function Eliminar_seleccion() {
  total = 0;
  servicio = {};

  mostrarCarrito();
  document.getElementById("suma_precio").textContent = "Total: $" + total;

  const tituloCarrito = document.getElementById("tituloCarrito");
  tituloCarrito.textContent = "Se ha eliminado su selección";
}

const botonFinalizar = document.querySelector(".finalizar_compra");

botonFinalizar.addEventListener("click", function () {
  let tieneProductos = false;

  for (let producto in bebidas) {
    tieneProductos = true;
    break;
  }

  if (!tieneProductos) {
    alert("Por favor, seleccione productos para realizar una compra.");
    return;
  }

  let email = prompt("Ingrese su dirección de correo electrónico:");

  while (email) {
    const comprobando_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (comprobando_email.test(email)) {
      alert("¡La operación se ha realizado con éxito!");
      alert("¡Muchas gracias por su compra!");

      const tituloCarrito = document.getElementById("tituloCarrito");
      tituloCarrito.textContent = "Seleccione artículos para realizar otra compra";
      total = 0;
      servicio = {};
      document.getElementById("suma_precio").innerHTML = "Total: $" + 0;
      document.getElementById("MuestraProductos").innerHTML = "";

      break;
    } else {
      alert("La dirección de correo electrónico ingresada no es válida.");
      email = prompt("Ingrese una dirección de correo electrónico válida:");
    }
  }
});


var botones = document.getElementsByClassName("agregar_al_carrito");
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    var boton = this;
    boton.style.backgroundColor = "white";
    boton.style.color = "black";
    var carroMovil = document.getElementById("carro_de_compras");
    carroMovil.style.color = "white";
    var BordercarroMovil = document.getElementById("carrozza");
    BordercarroMovil.style.borderColor = "white";
    BordercarroMovil.style.borderWidth = "3px";

    setTimeout(function () {
      BordercarroMovil.style.borderWidth = "";
      BordercarroMovil.style.borderColor = "";
      carroMovil.style.color = "";
      boton.style.backgroundColor = "";
      boton.style.color = "";
    }, 700); 
  });
}