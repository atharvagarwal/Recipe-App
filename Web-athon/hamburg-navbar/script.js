const toggleButtons= document.getElementsByClassName('toggle-bar')[0]
const navbarLinks=document.getElementsByClassName('navbar-links')[0]

toggleButtons.addEventListener('click',()=>{navbarLinks.classList.toggle('active')})
console.log("script is running")