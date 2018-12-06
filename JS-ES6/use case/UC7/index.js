import profileService from '../../../JS Module/use case/UC1/Ver-2 using ES6/src/profileService';
import ProfileComponent from '../../../JS Module/use case/UC1/Ver-2 using ES6/src/profileComponent';

const  profileComponent  =  new  ProfileComponent(new  profileService()); 



function validate(){
    const element = (document.getElementsByTagName('input'));
    var valid = true;
    // const fName = document.getElementById("fname");
    // const city = document.getElementById("city");
    Array.prototype.forEach.call(element, (element) => {
        // (element.classList).forEach( el => {
        //     if(el === "error") {
        //         return false;
        //     }
        // });
        element.validity
        
    });
    console.log('valid-----------', valid);
    
    // profileComponent.addProfile(fName.value, city.value);
    // window.location = "./success.html";
    
}
function init() {
    
   document.getElementById("form_info").onsubmit = function() {
       event.preventDefault();
       if(validate())
            return true;
        else {
            event.preventDefault();
            return false;
        }
   };
    
   const fName = document.getElementById("fname");
    fName.addEventListener("blur", function (event) {
        if (!(fName.validity.valid)) {
            fName.setCustomValidity("");
            fName.classList.add('error');
            (fName.parentElement.childNodes).forEach(function(el) {
                if(el.className === 'error-block'){
                    el.style.visibility = 'visible';
                }
            });
        } else {
            fName.classList.remove('error');
            (fName.parentElement.childNodes).forEach(function(el) {
                if(el.className === 'error-block'){
                    el.style.visibility = 'hidden';
                }
            });
        }
    });

    const lName = document.getElementById("lname");
    lName.addEventListener("blur", function (event) {
        
        if (!(lName.validity.valid)) {
            lName.classList.add('error');
            (lName.parentElement.childNodes).forEach(function(el) {
                if(el.className === 'error-block'){
                    el.style.visibility = 'visible';
                }
            });
        } else {
            lName.classList.remove('error');
            (lName.parentElement.childNodes).forEach(function(el) {
                if(el.className === 'error-block'){
                    el.style.visibility = 'hidden';
                }
            });
        }
    });
    const email = document.getElementById("email");
    email.addEventListener("blur", function (event) {
        
        if (!(email.validity.valid)) {
            email.classList.add('error');
            (email.parentElement.childNodes).forEach(function(el) {
                if(el.className === 'error-block'){
                    el.style.visibility = 'visible';
                }
            });
        } else {
            email.classList.remove('error');
            (email.parentElement.childNodes).forEach(function(el) {
                if(el.className === 'error-block'){
                    el.style.visibility = 'hidden';
                }
            });
        }
    });
    const city = document.getElementById("city");
    city.addEventListener("blur", function (event) {
        
        if (!(city.validity.valid)) {
            city.classList.add('error');
            (city.parentElement.childNodes).forEach(function(el) {
                if(el.className === 'error-block'){
                    el.style.visibility = 'visible';
                }
            });
        } else {
            city.classList.remove('error');
            (city.parentElement.childNodes).forEach(function(el) {
                if(el.className === 'error-block'){
                    el.style.visibility = 'hidden';
                }
            });
            document.querySelector('button').disabled = false;
        }
    });

    
}

window.onload = init;