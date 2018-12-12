function init() {
    const input = document.querySelector(".input");
    const button = document.querySelector("#button");
    /* 
      *  add input event to the input field
      *  to enable or disable the button
    */
    input.addEventListener('input', _ => {
        if(event.target.value && event.target.validity.valid) {
            button.disabled = false;
        }
        else {
            button.disabled = true;
        }
    });
     /* 
      *  add click event to the button
      *  to calculate the denominations
    */
    button.addEventListener('click', function (){
        const arr = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        let amount = input.value;
        let total = 0;
        arr.forEach(element =>{
            let denomination = parseInt(amount/element);
            var span = document.getElementsByClassName(element);
            span[0].innerText = (denomination);
            amount %= element;
            total += denomination;
        });
        document.querySelector(".total").innerText = (total);
    });
}
function test() {
    return 'hello';
}

module.exports = {
    init,
    test
};