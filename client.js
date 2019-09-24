const net = require('net');

const client = new net.Socket();

client.connect(3000, '127.0.0.1',()=>{
    //console.log('Hola ');
});

client.on('data',(data)=>{
    //console.log('Info: '+data);
    console.log(`Recibido: ${data}`);
    
    //client.destroy();
})

client.on('close',()=>{
    console.log('Se ha cerrado la conexion');
}); 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    client.write(input);
    console.log(`Mensaje: ${input}`);
});

rl.prompt();



