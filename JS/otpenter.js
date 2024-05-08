function moveToNextInput(event, nextInputId) {
    // Check if the input value is a single digit
    if (event.target.value >= 0 && event.target.value <= 9) {
        // Move focus to the next input field if the value is valid
        document.getElementById(nextInputId).focus();
    } else {
        // Clear the input value if an invalid value is entered
        event.target.value = '';
    }
}

let originalotp = localStorage.getItem("otp")
let btn =document.getElementById("btn")
btn.addEventListener("click",()=>{
    let otp1 = document.getElementById("otp1").value;
    let otp2 = document.getElementById("otp2").value;
    let otp3 = document.getElementById("otp3").value;
    let otp4 = document.getElementById("otp4").value;
     
    let fullotp = otp1+otp2+otp3+otp4;

    if(fullotp == originalotp){
        alert("verification success")
        window.open("http://127.0.0.1:5500/Project/HTML/UpdatePassword.html")
    }
    else{
        alert("incorrect otp")
        document.getElementById("otp1").value = "";
        document.getElementById("otp2").value = "";
        document.getElementById("otp3").value = "";
        document.getElementById("otp4").value = "";w
        window.open("http://127.0.0.1:5500/Project/HTML/otpenter.html")
    }
})
let email = localStorage.getItem("email")
let btn2 = document.getElementById("resendbtn");
btn2.value=email;
resendbtn.addEventListener("click", e=>{
  e.preventDefault()
  var email=btn2.value
  fetch(`http://localhost:8080/otp?email=${email}`, {
      method:"GET",
      headers:{
          "Content-Type":"Application/json"
      }
  })
  .then(Response=>{
      if(Response.ok){
          return Response.json()
      }else{
          throw new Error("Account Not Found")
      }
  })
  .then(data=>{
       otp=data.data
       localStorage.setItem("otp",otp)
       localStorage.setItem("email",email)
      alert("OTP Sent Succesfully..")
     window.location.href="http://127.0.0.1:5500/Project/HTML/otpenter.html"
  })
  .catch(error=>{
      alert("Account Not Found")
  })

})