


const minute =  document.getElementById('minute');
const second = document.getElementById('second'); 
const hour = document.getElementById('hour');
const amPm = document.getElementById('am-pm'); 

// colors
const colors = ['#9C2C77','#6F38C5','#FA7070','#87A2FB','#31E1F7','#367E18','#909742', '#FFDE00', '#4C0033', '#3D8361','#874C62','#472D2D','#F94892','#277BC0','#E64848','#54BAB9','#FEC260','#59CE8F','#31087B','#7DCE13', ]


setInterval(function ()  {
    const date = new Date();
    if(parseInt(minute.innerText) < 9){
        minute.innerText = `0${date.getMinutes()}`;
    }else{
        minute.innerText = date.getMinutes();
    }

    if(parseInt(second.innerText) < 9){
        second.innerText = `0${date.getSeconds()}`;
    }else{
        second.innerText = date.getSeconds();
    }
    
const randomColor = colors[Math.floor(Math.random() * colors.length)];

    second.style.color = randomColor; 
    hour.innerText = Math.floor(date.getHours() / 2 - 1 );
    const Ndate = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    const am = Ndate.split(' ');
    amPm.innerText = am[1] ;
    
    
},1000);







