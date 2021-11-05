let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btnLogin = document.querySelector(".btn-sign");


let getUser = localStorage.getItem("username");
let getPass = localStorage.getItem("password");

btnLogin.addEventListener("click", function(e) {
    e.preventDefault();
    if(username.value === "" || password.value === "") {
        alert("error! pleaze full data");
    }else {
        if(getUser && getUser.trim() === username.value.trim() && getPass === password.value) {
            window.location = "index.html";
        }else {
            console.log("somethin is wrong")
        }
    }
})