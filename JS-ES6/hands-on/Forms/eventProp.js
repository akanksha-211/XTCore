function init() {
    document.getElementById('parent').addEventListener('click', function () {
        console.log('parent element');
    });
    document.getElementById('child1').addEventListener('click', function () {
        console.log('child1 element');
    });
    document.getElementById('child2').addEventListener('click', function () {
        console.log('child2 element');
    });
    document.getElementById('btn').addEventListener('click', function () {
        console.log('button element');
        event.stopImmediatePropagation();
        
    });
    // Prevent Default
    document.getElementById("link").addEventListener('click', function(){
        console.log('test');
        event.preventDefault();
        event.stopImmediatePropagation();
    })
    
}

window.onload = init;