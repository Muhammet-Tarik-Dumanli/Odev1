let userName = prompt("Lütfen adınızı giriniz: ");
const NAME = document.querySelector("#myName");
NAME.innerHTML = userName;

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
    let dayName = days[date.getDay()];


    let dateTime = document.querySelector("#myClock")
    dateTime.innerHTML = `${hour}:${minute}:${second}  ${dayName}`
}
setInterval(showTime, 1000); 