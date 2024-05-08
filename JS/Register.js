// let register = document.getElementById("btn")
// console.log(register);
// register.addEventListener("click",(e)=>{
//     e.preventDefault()
//     let type = document.getElementById("usertype").value
//     console.log(type);
//     if(type == "farmer"){
//         window.open("./LoginFarmer.html")
//     }
//     else if(type == "vendor"){
//         window.open("./LoginVendor.html")
//     }
// })









let btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
e.preventDefault();

var type = document.getElementById("usertype").value
var firstName = document.getElementById("firstname").value;
var lastName  = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var pwd = document.getElementById("password").value;
var phone = document.getElementById("phone").value;
var gender = document.getElementById("gender").value;
var age = document.getElementById("age").value;
// var address = document.getElementById("address").value;

if(type === ""){
  usertypeError.textContent = "Please select usertype"
  return false;
}
if(firstName === ""){
  firstnameError.textContent = "Please enter first name"
  return false;
}
if(lastName === ""){
  lastnameError.textContent = "Please enter last name"
  return false;
}

if (email === "") {
  emailError.textContent = "Please enter your email"
  return false; 
}
if (pwd === "") {
    passwordError.textContent = "Please enter your password";
    return false; 
}
if(phone === ""){
  phoneError.textContent = "Please enter phone number"
  return false;
}
if (phone.length !== 10) {
  phoneError.textContent = "Phone number must be 10 digits"
  return false;
}
if (gender === "") {
   genderError.textContent = "Please select gender"
   return false;
}
if(age === ""){
  ageError.textContent = "Please enter age"
  return false;
}


let user = {
    type : type,
    firstName : firstName,
    lastName : lastName,
    email : email,
    pwd : pwd,
    phone : phone,
    gender : gender,
    age : age,
};
console.log(user);

fetch("http://localhost:8080/user",{
    method : "POST",
    headers : {
        "Content-Type" : "Application/json",
    },
    body : JSON.stringify(user),
})
.then((Response)=>{
    if(Response.ok){
        return Response.json();
    }
    else{
        throw new Error ("Registartion Not Succesfull")
    }
})
.then(()=>{
    // console.log(data);
    // localStorage.setItem("data",JSON.stringify(data));
    // localStorage.setItem("id",data.data.id);
    if(type == "FARMER"){
        window.location.href = "http://127.0.0.1:5500/Project/HTML/LoginFarmer.html"
    }
    else if(type == "VENDOR"){
        window.location.href = "http://127.0.0.1:5500/Project/HTML/LoginVendor.html";
    }
   
})
.catch((error)=>{
    console.error("Error",error);
    alert("An error occured while submitting");
});
})
let login = document.getElementById("a2")
login.addEventListener("click",(e)=>{
  e.preventDefault();
window.location.href = "http://127.0.0.1:5500/Project/HTML/lr.html";
  
})
