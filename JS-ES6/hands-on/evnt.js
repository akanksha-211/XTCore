
const component = {
    name: 'test',
    sayHello: function(name){
        alert('Component '+ name);
    }
}
const btn = document.querySelector('#hello');
const comp = component.sayHello;
const compCall = comp.bind(component, 'new name')
btn.addEventListener('click', compCall);