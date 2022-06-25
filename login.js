function login(){
    console.log("calling login")
    var email=document.getElementById("email")
    var password=document.getElementById("password")
    console.log(email.value)
    console.log(password.value)

var register = localStorage.getItem("data")
console.log(register)
console.log(register.email)
var registerObject = JSON.parse(register)
console.log(register.email)
if(email.value == registerObject.email && password.value == registerObject.password){
    console.log("Login sucessfull")
    window.location.href = "C:\Users\Netzwerk\Desktop\web\saraswathi.io"
}
else{
    console.log("Invalid email or password")
}

}