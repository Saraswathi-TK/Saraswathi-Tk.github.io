function register() {
    console.log("calling register function")
    var userName = document.getElementById("userName");
    console.log(userName);
    console.log(userName.value)
    console.log(userName.value.length)
    if (userName.value.length == "") {
        console.log("please enter user name")
        var erroruserName = document.getElementById("erroruserName")
        console.log(erroruserName)
        erroruserName.innerHTML = "please enter user name"
    }

    var gender = document.registeration.gender
    console.log(document.registeration)
    console.log(gender)
    if (document.registeration.gender[0].checked == false &&
        document.registeration.gender[1].checked == false &&
        document.registeration.gender[2].checked == false) {
        console.log("please select gender")
        var errorGender = document.getElementById("errorGender");
        errorGender.innerHTML = "Please select Gender"
    }

    console.log(document.registeration.city)
    console.log(document.registeration.city.value)
    if (document.registeration.city.value == "0") {
        console.log("please select city")
        var errorCity = document.getElementById("errorCity")
        errorCity.innerHTML = "please select city"
        errorCity.style.color = "red"
    }
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var genderValue
    if (document.registeration.gender[0].checked == true) {
        genderValue = document.registeration.gender[0].value
    } else if (document.registeration.gender[1].checked == true) {
        genderValue = document.registeration.gender[1].value
    } else if (document.registeration.gender[2].checked == true) {
        genderValue = document.registeration.gender[2].value
    }
    console.log(genderValue)
    var city = document.registeration.city.value
    localStorage.setItem("flipkart", "Mobile")

    var register = {
        "name": userName.value,
        "email": email.value,
        "password": password.value,
        "gender": genderValue,
        "city": city,
    }
    console.log(register)
    localStorage.setItem("data", JSON.stringify(register))
}