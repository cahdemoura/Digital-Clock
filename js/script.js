const horas = document.getElementById('hours');
const minutos = document.getElementById('minutes');
const segundos = document.getElementById('seconds');

const clock = setInterval(function time(){

    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minute = dateToday.getMinutes();
    let second = dateToday.getSeconds();

    if (second < 10)
        second = '0' + second;
    if (minute < 10)
        minute = '0' + minute;
    if (hour < 10)
        hour = '0' + hour;

        horas.textContent = hour;
        minutos.textContent = minute;
        segundos.textContent = second;

})