const varBtn = document.getElementById("open-btn")
const closeBtn = document.getElementById("close-btn")

document.querySelector("nav").style.display = "none";
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