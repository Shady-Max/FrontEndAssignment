function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}

function displayDateTime() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const formattedTime = formatAMPM(date);

    document.getElementById("dateTime").innerText = `${formattedDate}, ${formattedTime}`;
}

displayDateTime();

setInterval(displayDateTime, 1000);