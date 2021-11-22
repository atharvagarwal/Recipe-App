function dark(){
    document.getElementsByTagName("button")[0].addEventListener('click',()=>{document.body.classList.toggle('dark');
    document.getElementsByTagName("h1")[0].classList.toggle('dark_mode');})
}

dark()