

const socketController = (socket) => {

    //cuando cliente se conecta
    console.log('cliente conectado', socket.id );
           
    socket.on('disconnect', () => {
        console.log('cliente desconectado', socket.id );
    });

    //creando listener
    socket.on('enviar-mensaje', ( payload, callback ) => {
        
    

        const id = 123456;
        callback(id);
        //mandando mensaje a todos los clientes conectados emit emite evento a todos
        socket.broadcast.emit('enviar-mensaje', payload);

    })

}


module.exports = {
    socketController
}