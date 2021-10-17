const bataweekndStartDate = new Date('2021-10-22 22:00:00')
const bataweekndEndDate = new Date('2021-10-31 14:00:00')

const buildLabel = (value, label) => value > 1 ? `${label}s` : label

const renderCountdownItem = (item, value, label) => {
    document.getElementById(`${item}`).innerHTML = value 
    document.getElementById(`${item}-label`).innerHTML = buildLabel(value, label)
}

const renderCountdown = () => {
    const nowDate = new Date()

    let delta = Math.abs(bataweekndStartDate - nowDate) / 1000;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    const seconds = Math.floor(delta % 60);

    const isBataweekndHappening = bataweekndEndDate - nowDate > -1000;
    
    if (isBataweekndHappening) {
        renderCountdownItem('days', days, 'Day')
        renderCountdownItem('hours', hours, 'Hour')
        renderCountdownItem('minutes', minutes, 'Minute')
        renderCountdownItem('seconds', seconds, 'Second')
    } else {
        renderCountdownItem('days', 'B', 'O')
        renderCountdownItem('hours', 'A', 'V')
        renderCountdownItem('minutes', 'T', 'E')
        renderCountdownItem('seconds', 'A', 'R')
    }
}

setInterval(renderCountdown, 1000)
