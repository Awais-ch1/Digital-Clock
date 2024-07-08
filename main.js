const date = function(){
const now = new Date();
let hours = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let period = 'AM';

if(hours >= 12){
    period = 'PM'
}
hours = hours > 12 ? hours % 12 :hours;

if(hours < 10){
    hours = "0" + hours;
}
if(min < 10){
    min = "0" +min ;
}
document.querySelector('.hours').textContent = hours;
document.querySelector('.mint').textContent = min;
document.querySelector('.sec').textContent = sec;
document.querySelector('.period').textContent = period;

// for Month and day  and day Name

const dayNumber = now.getDate();
const dayName = now.toLocaleString('default',{'weekday': 'long'});
const monthName = now.toLocaleString('default',{'month': 'short'});



document.querySelector('.month-name').textContent = monthName;
document.querySelector('.day-name').textContent = dayName;
document.querySelector('.day-num').textContent = dayNumber;


}
let update = setInterval(date, 1000);