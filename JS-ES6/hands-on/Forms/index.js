function test(){
    document.querySelector("#fName").addEventListener
            ('input', function(){
                // console.log(event.target);
                
                document.querySelector("#firstName").innerHTML = event.target.value;
            });
    document.querySelector("#lName").addEventListener
            ('input', function(){
                
                document.querySelector("#lastName").innerHTML = event.target.value;
            });
    document.querySelector("#citySelect").addEventListener
            ('change', function(){
                
                document.querySelector("#city").innerHTML = event.target.value;
            });

    var radio = document.getElementsByName("radioSelect");
    for (i=0; i<radio.length;i++){
       event.s
        radio[i].addEventListener('click', function () {
            document.querySelector("#radioVal").innerHTML = event.target.parentElement.innerText;
        })
        }
       
    var check = document.getElementsByName("checkSelect");
    for (i=0; i<check.length;i++){
        
        check[i].addEventListener('click', function () {
            document.querySelector("#checkVal").innerHTML = event.target.parentElement.innerText;
        })
        } 
    
    
}

window.onload = test;