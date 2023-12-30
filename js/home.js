

document.getElementById('logout').addEventListener('click',function(){
    window.location = './login.html'
})



var loggedUser = JSON.parse(localStorage.getItem('logedinUser'))


document.getElementById('username').innerHTML =`Welcom ${loggedUser.name}` 

