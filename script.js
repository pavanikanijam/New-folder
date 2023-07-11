document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00"; 
};

let currentTime = setInterval(()=>{
    let date = new Date();
    document.getElementById('t').innerHTML= date.getHours() + ':' + date.getMinutes() + ':'+ date.getSeconds();
},1000);

// let timer = (q)=>{
    let min = 10;
    let sec = 00;

    let time = setInterval(()=>{
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec; 
        sec--;
        if(sec==-1){
            min--;
            sec=59;
        }
        if(min==-1){
            clearInterval(time);
            result();
        }
    },1000);
    // setTimeout(()=>{
    //     document.getElementById('question').innerHTML = "";
    //     document.getElementById('res').innerHTML = "";
    //     document.getElementById('controls').innerHTML = "";
    //     alert((q+1));
    //     document.getElementById(q+1).onclick = null;
    // },3000);
    // // alert("time up!!");
// };
