let time = document.querySelector("#time");
let date = document.querySelector("#date");

setInterval( () => {
    today();
},1000)

const today = () => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm = hours <= 12 ? 'AM' : 'PM'

    let dayNames = ['Sat','Sun','Mon','Tues','Wed','Thus','Fri'];
    let monthNames = ['Jan','Feb','Mar','Apri','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];

    
    
    let currentTime = `${hours <= 9 ? '0' + hours : hours} : ${minutes <= 9 ? '0' + minutes : minutes} : ${seconds <= 9 ? '0' + seconds : seconds} ${ampm}`;
    
    let currentDate = `${dayNames[today.getDay() + 1]}, ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`
    
    time.innerHTML = currentTime;
    date.innerHTML = currentDate;
}

