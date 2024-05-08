// let form = document.querySelector("form")
let btn = document.getElementById("btn")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let email =document.getElementById("email").value.trim()
    fetch(`http://localhost:8080/otp?email=${email}`,{
        method : "GET",
    headers : {
        "Content-Type" : "Application/json",
    },
   
    })
    .then(Response=>{
        if(Response.ok){
            return Response.json()
        }
        else{
            throw new Error("Account not found")
        }
    })
    .then(data =>{
        otp = data.data
        localStorage.setItem("otp",otp)
        localStorage.setItem("email",email)
        alert("otp sent successfully")
        window.location.href = "http://127.0.0.1:5500/Project/HTML/otpenter.html"            
    })
    .catch(error=>{
        console.error("Account not found")
    })

    
})