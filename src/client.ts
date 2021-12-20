import {io} from 'socket.io-client';

export const client = io('http://localhost:5000', { 
    reconnectionDelayMax: 10000,    
    transports: ['websocket']
});

client.on('connect', () => {
    console.log("Connected!");
    client.emit('testMsg', 'a message');
});

client.on('disconnect', () => {
    console.log("Disconnected!");
});
