document.getElementById("submit").onclick=function(){
const name=document.getElementById("fname").value+" "+document.getElementById("lname").value
location.href="/greeting/"+name;
}

