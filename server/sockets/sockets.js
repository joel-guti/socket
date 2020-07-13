const { io } = require("../server");

io.on("connection", (client) => {
    client.on("disconnect", () => {
        console.log("lo siento!. se ha cometido un error. intentalo mas tarde");
    });

    client.on("enviarMensaje", (Mensaje) => {
        client.broadcast.emit("enviarMensaje", Mensaje);
        console.log(Mensaje);
    });

    console.log("se conecto un usuario con socket");
    client.emit(
        "enviarMensaje", {
            nombre: "admin",
            email: "joelrizosone@gmail.com",
            mensaje: "bienvenido al chat amifo",
        },
        function(respuesta) {
            console.log("el usuario recibio el mensaje");
            console.log(respuesta);
        }
    );
});