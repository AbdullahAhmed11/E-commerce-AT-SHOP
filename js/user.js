let nonUser = document.querySelector("#none-user");
let userDom = document.querySelector("#user");
let links = document.querySelector(".links");
let logOut = document.querySelector("#log")

let user = localStorage.getItem("username");

if(user) {
    links.remove();
    userDom.style.display = "flex";
    logOut.style.display = "flex";
    userDom.innerHTML = user;
} 
logOut.addEventListener("click", function(e) {
    localStorage.clear();
    setTimeout(() => {
        window.location = "registar.html";
    },1500);
})