const Emmiter = require('events');
const emmiter = new Emmiter();

emmiter.on('message', (data, second, third) => {
    console.log('recieved: ' + data);
    console.log('second arg: ' + second);
    console.log('third arg: ' + third);
});

const MESSAGE = process.env.MESSAGE || 'test message';


// cross-env MESSAGE="Hello, world!" node events.js
if(MESSAGE) {
    emmiter.emit('message', MESSAGE, 'second arg', 'third arg');
}