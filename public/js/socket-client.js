//referencias del html

const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');




//socket del cliente
const socket = io();


//listeners escucha cambios 
socket.on('connect', () => {
    
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

//listener que avisa cuando se desconecta el servidor
socket.on('disconnect', () => {

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

//creando listener para escuchar lo que dice el servidor
socket.on('enviar-mensaje', ( payload )=> {
    console.log( payload )
});

//creando un eventListener en la clase del boton
btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123456',
        fecha: new Date().getTime() 
    }

    //como le mandamos la info al servidor
    socket.emit('enviar-mensaje', payload, ( id ) => {
        console.log('desde el server', id)

    });


})