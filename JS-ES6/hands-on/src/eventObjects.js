document.querySelector("#fName").addEventListener
        ('input', function(){
            // console.log(event.target);
            console.log('firstname-',event.target.value);
            document.querySelector("#name").innerHTML = event.target.value;
        });
document.querySelector("#lName").addEventListener
        ('input', function(){
            console.log('lastname-',event.target.value);
            document.querySelector("#name").innerHTML = event.target.value;
        });