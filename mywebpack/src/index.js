// console.log('Welcome to webpack!');
import './styles.css';

function component() {
    var element = document.createElement('h1');
    element.classList.add('hello');
    element.innerHTML = 'Welcome to Webpack!'
    return element;
}
document.body.appendChild(component());