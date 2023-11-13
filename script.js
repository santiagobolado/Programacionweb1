// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Buscar el producto en el carrito por su ID
    let producto = productosEnCarrito.find(function(item) {
      return item.id === idProducto;
    });
  
    // Si el producto no existe en el carrito, agregarlo con cantidad 1
    if (!producto) {
      productosEnCarrito.push({ id: idProducto, cantidad: 1 });
    } else {
      // Si el producto ya existe, incrementar la cantidad
      producto.cantidad++;
    }
  
    // Actualizar el carrito en la página
    actualizarCarrito();
  }
  