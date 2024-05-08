let email=localStorage.getItem("email")
let btn = document.getElementById("btn");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let confpassword = document.getElementById("confpassword").value.trim();
    let password = document.getElementById("password").value.trim();
    if (confpassword !== password) {
        alert("Password Mismatch");
        return;
      }

  var password_input = document.getElementById("password").value;

  let errorMessage = "";

  if (!password_input) {
    errorMessage += "please enter Password.\n";
  }
  if (errorMessage) {
    alert(errorMessage);
    return;
  }
  fetch(`http://localhost:8080/updatepwd?email=${email}&pwd=${password_input}`,{
    method: "PUT",
    headers: {
        "Content-Type": "Application/json",
      },
  })
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new Error("Update password Not Sucessfull");
    }
  })
  .then(()=>{
    window.location.href ="http://127.0.0.1:5500/Project/HTML/lr.html";
  })
  .catch((error) => {
    console.error("Error", error);
    alert("An error occured while Submitting");
  });
})