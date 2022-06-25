function register()
{
    console.log("calling register function")
    var UserName=document.getElementById("userName");
    console.log(userName);
    console.log(userName.value)
    console.log(userName.value.length)
    if(userName.value.length == ""){
    console.log("please enter user name")
     var erroruserName = document.getElementById("erroruserName")
     console.log(erroruserName)
     erroruserName.innerHTML="please enter user name"
    }
}
function display()
{
    console.log("calling display function")
    var Useremail=document.getElementById("email");
    console.log(email);
    console.log(email.value)
    console.log(email.value.length)
    if(email.value.length == ""){
    console.log("please enter user email")
     var erroruseremail = document.getElementById("erroruseremail")
     console.log(erroruseremail)
     erroruseremail.innerHTML="please enter user email"
    }
}
function show()
{
    console.log("calling show function")
    var Userpassword=document.getElementById("password");
    console.log(password);
    console.log(password.value)
    console.log(password.value.length)
    if(password.value.length == ""){
    console.log("please enter user password")
     var erroruserpassword = document.getElementById("erroruserpassword")
     console.log(erroruserpassword)
     erroruserpassword.innerHTML="please enter user password"
    }
}

