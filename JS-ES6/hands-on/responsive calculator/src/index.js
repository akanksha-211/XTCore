function init() {
    // alert('cal');
    var btn = document.getElementsByTagName('button');
    let var1 = [], op = '';
    var input = document.getElementById('input').value;
    Array.prototype.forEach.call(btn, (btn) => {
        if (btn.className === 'eq') {
            btn.addEventListener('click', _ => {
                var output = eval(input);
                // console.log(output);
                document.getElementById('input').value = output;
            })
        }
        else if (btn.className === 'reset') { 
            btn.addEventListener('click', _ => {
                input = '';
                document.getElementById('input').value = 0;
            });
            
        }
        else if(btn.className === 'noSupp') {
            btn.addEventListener('click', _ => {
                alert('Function not supported!');
            });
        }
        else {
            btn.addEventListener('click', _ => {
                input += btn.value;
                // console.log(input);
                document.getElementById('input').value = input;
            })
        }
    })

}
window.onload = init;