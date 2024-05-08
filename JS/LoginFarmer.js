let log = document.getElementById("log");

log.addEventListener("click",(e)=>{
    e.preventDefault();
    let email = document.getElementById("email").value.trim();
    let pwd = document.getElementById("password").value.trim();

    

    if (email === "") {
        emailError.textContent = "Please enter your email"
        return false; 
      }
      if (pwd === "") {
          pwdError.textContent = "Please enter your password";
          return false; 
      }
      
      
    fetch(`http://localhost:8080/login?email=${email}&pwd=${pwd}`,
            {
                method : "GET",
                headers : {
                    "Content-Type" : "Application/json",
                },
            }
    )
    .then((Response)=>{
        if(Response.ok){
            return Response.json();
        }
        else{
            throw new Error ("Invalid UserName Or Password")
        }
    })
    .then((data)=>{
        console.log(data);
        alert("login")
        localStorage.setItem("data",JSON.stringify(data));
        // localStorage.setItem("id",data.data.id);
        if(data.data.type == "FARMER"){
            window.location.href = "http://127.0.0.1:5500/Project/HTML/HomeFarmer.html";
        }
        else if(data.data.type == "VENDOR"){
            window.location.href = "http://127.0.0.1:5500/Project/HTML/HomeVendor.html";
        }
        
    })
    .catch(()=>{
        alert("invalid username or password..")
    })
})
    let password = document.getElementById("a3")
      password.addEventListener("click",(c)=>{
        c.preventDefault();
        window.location.href = "http://127.0.0.1:5500/Project/HTML/otp.html";
    });
    let registerpage = document.getElementById("a6")
    registerpage.addEventListener("click",(d)=>{
        d.preventDefault();
        window.location.href = "http://127.0.0.1:5500/Project/HTML/Register.html";
    })