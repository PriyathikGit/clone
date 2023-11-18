const varBtn = document.getElementById("open-btn")
const closeBtn = document.getElementById("close-btn")


// document.querySelector("nav").style.display = "block";
closeBtn.style.display = "none";


varBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const navBar = document.querySelector("nav");
    if (varBtn) {
        navBar.style.display = "block";
        closeBtn.style.display = "block";
    }
    else {
        navBar.style.display = "none";
    }
})

closeBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const navBar = document.querySelector("nav");
    if (closeBtn) {
        navBar.style.display = "none";
        closeBtn.style.display = "none"
    }
    else {
        navBar.style.display = "block";
    }
})

document.getElementById('homeBtn').addEventListener('click',()=>{
    window.location.href ="index.html"
})
document.getElementById('dashBtn').addEventListener('click',()=>{
    window.location.href ="Dashboard.html"
})
document.getElementById('earnBtn').addEventListener('click',()=>{
    window.location.href ="Earn.html"
})
document.getElementById('loginBtn').addEventListener('click',()=>{
    window.location.href ="Loginpage.html"
})