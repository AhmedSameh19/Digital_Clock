function clock(){
    let z=new Date();
    let hours=z.getHours();
    let mins=z.getMinutes();
    let secs=z.getSeconds();
    let period="";
    let time ="";
    if(hours>12){
        period ="PM";
        hours-=12;
    }
    else{
        period="AM";
    }
    if(hours===0){
        hours=12;
    }
    
    if(hours<10){
        hours= "0"+hours;
    }
    if(mins<10){
        mins= "0"+mins;
    }
    if(secs<10){
        secs= "0"+secs;
    }
    time=`${hours}:${mins}:${secs} ${period}`
    setTimeout(clock,1000);
    document.getElementById("clock").innerText=time;
};
clock();
