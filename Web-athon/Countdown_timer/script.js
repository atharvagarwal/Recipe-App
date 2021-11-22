const date= '1 jan 2022'

const datefunc=()=>{
    const newYearsDate= new Date(date)
    let current_Date=new Date()
    let timeleft= newYearsDate-current_Date;
    let days=Math.floor(timeleft/(1000*3600*24))
    let hours=Math.floor(timeleft/(1000*3600)%24)
    let minutes=Math.floor(timeleft/(1000*60)%60)
    let seconds=Math.floor(timeleft/1000)%60
    console.log(seconds)


    console.log(days)
    document.getElementsByClassName("days")[0].innerHTML= days +"<br><h5>DAYS</h5>";
    document.getElementsByClassName("hours")[0].innerHTML= hours +"<br><h5>HOURS</h5>";
    document.getElementsByClassName("minutes")[0].innerHTML= minutes +"<br><h5>MINUTES</h5>";
    document.getElementsByClassName("seconds")[0].innerHTML= seconds+"<br><h5>SECONDS</h5>";
}

datefunc()
setInterval(datefunc,1000)

