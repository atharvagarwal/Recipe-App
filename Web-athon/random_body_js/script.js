const button=document.getElementsByTagName("button")[0]
console.log(Math.floor(Math.random()*100));
function back_change(){
    button.addEventListener('click',function xyz(){
        document.body.style.background="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"
        })
  
}

back_change()
