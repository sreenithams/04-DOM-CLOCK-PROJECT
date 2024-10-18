const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const section=document.querySelector("#section")
const displayTime=()=>{
    let hrs=new Date().getHours()
    let mins=new Date().getMinutes()
    let sec=new Date().getSeconds()
    if(hrs >= 12){
        section.innerHTML="PM"
    }else{
        section.innerHTML="AM"
    }

    if(sec<10){
        sec="0"+sec
    }

    if(mins<10){
        mins="0"+mins
    }

    if(hrs>12){
        hrs=hrs-12
    }
hours.innerHTML=hrs
minutes.innerHTML=mins
seconds.innerHTML=sec
}
setInterval (displayTime,10)


