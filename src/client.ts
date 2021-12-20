import {io} from 'socket.io-client';
import {store,connected,disconnected} from './store';

export const client = io('http://localhost:5000', { 
    reconnection: true,
    reconnectionDelay: 500,   
    transports: ['websocket']
});

client.on('connect', () => {
    store.dispatch(connected({}));
});

client.on('disconnect', () => {
    store.dispatch(disconnected({}));
});
