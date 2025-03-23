import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello!'+name);
}

function byeHandler(name){
    console.log('Goodbye!'+name);
}

//Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('bye', byeHandler);


//Emit events
myEmitter.emit('greet','harry');
myEmitter.emit('bye', 'harry');

//Error handling
myEmitter.on('error', (err) => {
    console.error('Error occurred: '+err);
});
//Simulate error
myEmitter.emit('error', new Error('Something went wrong!'));