function component (){
    console.log('Component called!!');
    var h = document.getElementById('myHeading');
    console.dir(h);
    createElement();
}
function createElement() {
    const head2 = document.createElement('h2');
    console.dir(head2);
    head2.innerHTML = 'New Heading!!';
    document.body.appendChild(head2);
}
window.onload = component;
