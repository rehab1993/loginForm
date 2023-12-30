// var nameInput = document.querySelector('.input-1');
var emailInput = document.querySelector('.input-2');
var passwordInput = document.querySelector('.input-3');
var alert = document.querySelector('#exist');
var alert = document.querySelector('#exist');
var signUpBtn = document.querySelector('.signUp');
// var loginBtn = document.querySelector('#login');


document.getElementById('sinup').addEventListener('click',function(){
    window.location = './index.html'
});

var arr = []

if(localStorage.getItem('users') != null){
    arr = JSON.parse(localStorage.getItem('users'))
}


document.querySelector('#login').addEventListener('click',function(){

    if(validateEmail() && validatePassword()){
        var currentEmail = emailInput.value;
        for(var i = 0 ; i < arr.length ; i++){
            console.log(arr[i])
            if (currentEmail == arr[i].email){
                localStorage.setItem('logedinUser',JSON.stringify(arr[i]))
                window.location = './home.html';
            }
        }       
    }else{
        alert("Not valide")
    }

})

function clearInputs(){
    
    emailInput.value = '';
    passwordInput.value = '';
}

function validateEmail(){
   
    var regx = /^[A-Za-z]{3,10}.\@[a-z]{3,20}\.com$/;
    return regx.test(emailInput.value);

}
function validatePassword(){
    var regx = /.+/;
    return regx.test(passwordInput.value);

}





