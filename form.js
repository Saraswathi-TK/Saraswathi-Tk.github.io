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
var gender = document.register.gender;
console.log(document.register)
console.log(gender)
if(document.register.gender[0].checked == false &&
    document.register.gender[1].checked == false &&
    document.register.gender[2].checked == false){
        console.log("please select gender")
        var errorGender = document.getElementById("errorGender");
        errorGender.innerHTML = "Please select Gender"
        }

        console.log(genderValue)
        var city = document.register.city.value
        localStorage.setItem("flipkart","Mobile")

        var register = {
            "name":username.value,
            "email":email.value,
            "password":password.value,
            "gender":genderValue,
            "city":city,
        }
        console.log(register)
        localStorage.setItem("data",JSON.stringify(register))
    }