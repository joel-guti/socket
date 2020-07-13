var socket = io();

socket.on("connect", function() {
    console.log("Hemos conecado al servidoe");
});
socket.on("connect", function() {
    console.log("hola muy buenas");
});

socket.on("disconnect", function() {
    console.log("perdimos la conexion con el servidor");
});

socket.on("enviarMensaje", function(mensaje, callback) {
    console.log(mensaje);

    /*
      if (mensaje.mensaje) {
          callback({
              respuesta: true,
          });
      } else {
          callback({
              respuesta: false,
          });
      }
      */
});

socket.emit("enviarMensaje", {
    nombre: "Fernando",
    mensaje: "hola mundo de nodejs y socket",
});