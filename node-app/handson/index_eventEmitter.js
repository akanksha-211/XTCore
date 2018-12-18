const {
    EventEmitter
} = require ('events');

const eventEmitter = new EventEmitter();
eventEmitter.on('greet', _ => {
    console.log('Handling Greet Event!!');
});

eventEmitter.on('hello', _ => {
    console.log('Handling Hello Event!!');
});

eventEmitter.on('hi', _ => {
    console.log('Handling Hi Event!!');
});

eventEmitter.on('add', (a,b) => {
    console.log(a+b);
});

eventEmitter.on('myevent', _ => {
    console.log(this);
});

// eventEmitter.on('asyncevent', (e, myevent) => {
    
// });

eventEmitter.emit('greet');
eventEmitter.emit('hello');
eventEmitter.emit('hi');
eventEmitter.emit('myevent');

class Room extends EventEmitter {
    constructor(){
        super();
        this.on('initialize', function(){
            console.log('Lights switched on');
            console.log('Temperature set');
            console.log('auto cleaning enabled');
        });
        this.on('destroy', function(){
            console.log('Lights switched off');
            console.log('Temperature un-set');
            console.log('auto cleaning disabled');
        });
    }
    open() {
        this.emit('initialize');
    }
    close(){
        this.emit('destroy');
    }
}
const room = new Room();
setTimeout(() => {
    room.open();
}, 1000);

room.close();

setTimeout(() => {
    room.close();
}, 1000);
room.open();