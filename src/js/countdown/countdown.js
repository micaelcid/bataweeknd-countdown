let daysElement = document.getElementById("days")
let daysLabelElement = document.getElementById("days-label")
let hoursElement = document.getElementById("hours")
let hoursLabelElement = document.getElementById("hours-label")
let minutesElement = document.getElementById("minutes")
let minutesLabelElement = document.getElementById("minutes-label")
let secondsElement = document.getElementById("seconds")
let secondsLabelElement = document.getElementById("seconds-label")

const bataweekndDate = new Date('2021-10-23 15:30:00')

const renderCountdown = () => {
    const nowDate = new Date()

    let delta = Math.abs(bataweekndDate - nowDate) / 1000;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    const seconds = Math.floor(delta % 60);
    
    daysElement.innerHTML = days 
    daysLabelElement.innerHTML = days > 1 ? 'Days' : 'Day'
    hoursElement.innerHTML = hours
    hoursLabelElement.innerHTML = hours > 1 ? 'Hours' : 'Hour'
    minutesElement.innerHTML = minutes
    minutesLabelElement.innerHTML = minutes > 1 ? 'Minutes' : 'Minute'
    secondsElement.innerHTML = seconds
    secondsLabelElement.innerHTML = seconds > 1 ? 'Seconds' : 'Second'
}

setInterval(renderCountdown, 1000)
