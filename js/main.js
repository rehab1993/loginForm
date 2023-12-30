
var nameInput = document.querySelector('.input-1');
var emailInput = document.querySelector('.input-2');
var passwordInput = document.querySelector('.input-3');
var alertName = document.querySelector('.alert-1');
var alertEmail = document.querySelector('.alert-2');
var alertPassword = document.querySelector('.alert-3');
var checkAlert = document.querySelector('.alert-4');
var checkSucsses = document.querySelector('#sucsses');



var emailAlertMessage = document.querySelector('#email');
var alertsucsses = document.querySelector('#sucsses');
var usersList= []


document.getElementById('signin').addEventListener('click',function(){
    window.location = './login.html'
})

if(localStorage.getItem('users') != null){
    usersList = JSON.parse(localStorage.getItem('users'))
}



document.querySelector('#signUp').addEventListener('click',function(){
    if(validateName()&& validateEmail() && validatePassword()){

    var newUser = {
        name : nameInput.value,
        email : emailInput.value,
        password : passwordInput.value,
    }

    if(checkEmail()){
        emailAlertMessage.style.display = 'block'
         console.log('exist');
         alert('exist')

         nameInput.classList.remove('is-valid');
         emailInput.classList.remove('is-valid');
         passwordInput.classList.remove('is-valid');
         clearInputs();

    }else{
        usersList.push(newUser)
        localStorage.setItem('users',JSON.stringify(usersList))
        // checkSucsses.style.remove('d-none');
        alert('sucsses')
        nameInput.classList.remove('is-valid');
        emailInput.classList.remove('is-valid');
        passwordInput.classList.remove('is-valid');
        clearInputs();
       
        
    }
    
    }
}

)

function clearInputs(){
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}

function validateName(){
    var regx = /^[A-Z][a-z]{3,10}$/;
    if(regx.test(nameInput.value)){
        nameInput.classList.add('is-valid');
        nameInput.classList.remove('is-invalid');
        alertName.classList.add('d-none');
        return true
        
    }else{
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        alertName.classList.remove('d-none');
        return false

    }
 
}
nameInput.addEventListener('blur',validateName);

function validateEmail(){
    var regx = /^[A-Za-z]{3,10}.\@[a-z]{3,20}\.com$/;
    if(regx.test(emailInput.value)){
       emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
       alertEmail.classList.add('d-none');
        return true
        
    }else{
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        alertEmail.classList.remove('d-none');
        return false

    }
 
}
emailInput.addEventListener('blur',validateEmail);

function validatePassword(){ 
   // var regx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    var regx =/.+/
    if(regx.test(passwordInput.value)){
       passwordInput.classList.add('is-valid');
        passwordInput.classList.remove('is-invalid');
       alertPassword.classList.add('d-none');
       
        return true
        
    }else{
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        alertPassword.classList.remove('d-none');
        return false

    }
 
}
passwordInput.addEventListener('blur',validatePassword);


function checkEmail(){
    var exist = false
    var currentEmail = document.querySelector('.input-2');
    for(var i = 0 ; i< usersList.length ; i ++){
        if(usersList[i].email == currentEmail.value){  
            //"" // EMAIL ALREADY REGESTERED
            console.log('USER ALREADY HAS ACCOUNT');
            exist = true
        }
    }
    return exist
}


































// var mood ='sign up'

// var arr = []

// signInLink.addEventListener('click',function(){
//     console.log('hello');

//     if(mood =='sign Up'){
//         var  newUser = {
//             name : nameInput.value ,
//             email : emailInput.value ,
//             password : passwordInput.value ,
//         };
//         arr.push(newUser);
//         localStorage.setItem('users',JSON.stringify(arr))
//         console.log(arr)
//         loginBtn.style.display = 'none'
//         signUpBtn.style.display = 'block';
        
//         clearInput()

//     }else{
//         mood = 'sign In';
        
//         loginBtn.style.display = 'block'
//         signUpBtn.style.display = 'none';
//         nameInput.style.display = 'none'

//     }
    

// });
    

// function clearInput(){
    
//     nameInput.value = ' ';
//     emailInput.value = ' ';
//     passwordInput.value = ' ';
// }

// signUpLink.addEventListener('click',function(){
//     console.log('hi');
//     mood = 'sign In';
   
// });

   









 