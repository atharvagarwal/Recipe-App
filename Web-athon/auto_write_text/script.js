const text="this a vanilla javascript auto moving text."

let index=0

function xyz(){
    document.body.innerText=text.slice(0,index);
    index++

    if(index>text.length-1)
    {
    index=0
    }
    
}

setInterval(xyz,100);