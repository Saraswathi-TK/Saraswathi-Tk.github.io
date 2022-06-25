console.log("javascript")
var a=10;
console.log(a)
console.log(typeof(a))
a="javascript"
console.log(a)
console.log(typeof(a))
var b;
console.log(b)
console.log(typeof(b))
var a;
console.log(a)

function display()
{
    console.log("calling display function")
    var message=document.getElementById("displaymessage");
    console.log(message);
    displaymessage.innerHTML="calling display function"
}
function show()
{
    console.log("calling show function")
    var message=document.getElementById("showmessage");
    console.log(message);
    showmessage.innerHTML="calling show function"
}
function details()
{
    console.log("calling details function")
    var message=document.getElementById("detailsmessage");
    console.log(message);
    detailsmessage.innerHTML="calling details function"
}
function dis()
{
    console.log("calling dis function")
    var message=document.getElementById("dismessage");
    console.log(message);
    dismessage.innerHTML="calling dis function"
}
function dsly()
{
    console.log("calling dsly function")
    var message=document.getElementById("dslymessage");
    console.log(message);
    dslymessage.innerHTML="calling dspl function"
}
function sum()
{
    console.log("calling sum function");
    var num1=document.getElementById("num1");
    console.log(num1);
    var num2=document.getElementById("num2");
    console.log(num2);
    console.log(num1.value);
    console.log(num2.value);

var c =parseInt(num1.value)+parseInt(num2.value)
    var result = document.getElementById("result");
    result.innerHTML=c;
}
function sub()
{
    console.log("calling sub function");
    var num1=document.getElementById("num1");
    console.log(num1);
    var num2=document.getElementById("num2");
    console.log(num2);
    console.log(num1.value);
    console.log(num2.value);

var c =parseInt(num1.value)-parseInt(num2.value)
    var result = document.getElementById("result");
    result.innerHTML=c;
}
function mul()
{
    console.log("calling multipe function");
    var num1=document.getElementById("num1");
    console.log(num1);
    var num2=document.getElementById("num2");
    console.log(num2);
    console.log(num1.value);
    console.log(num2.value);

var c =parseInt(num1.value)*parseInt(num2.value)
    var result = document.getElementById("result");
    result.innerHTML=c;
}
function div()
{
    console.log("calling division function");
    var num1=document.getElementById("num1");
    console.log(num1);
    var num2=document.getElementById("num2");
    console.log(num2);
    console.log(num1.value);
    console.log(num2.value);

var c =parseInt(num1.value)/parseInt(num2.value)
    var result = document.getElementById("result");
    result.innerHTML=c;
}

