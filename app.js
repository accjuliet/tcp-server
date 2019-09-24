const net = require('net');

const server = net.createServer((conexion) => {
    conexion.write("Echo server!!!");
    conexion.pipe(conexion);
});

server.on('data',(data)=>{
    console.log( `recibido: ${data}`);
})

server.listen(3000, '127.0.0.1');

