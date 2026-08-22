const timetaskbar = document.getElementById("timetaskbar");
const datetaskbar = document.getElementById("datetaskbar");
function runclock() {
    setInterval(() => {
        const current = new Date();
        const prehour = current.getHours();
        const preminute = current.getMinutes();
        const day = current.getDate();
        const month = current.getMonth() + 1;
        const year = current.getFullYear();
        let hours;
        let minutes;
        let ampm;
            if (prehour > 12) {
                hours = prehour - 12;
                ampm = "PM";
            } else if (prehour == 12) {
                hours = prehour;
                ampm = "PM";
            }
            else if (prehour == 0) {
                hours = 12;
                ampm = "AM";
            } else {
                hours = prehour;
                ampm = "AM";
            }
            if (preminute < 10) {
                const preminute2 = preminute.toString();
                minutes = '0' + preminute2;
            }
            else {
                minutes = preminute;
            }
        const time = current.toLocaleTimeString();

        timetaskbar.innerHTML = hours + ':' + minutes + ' ' + ampm;
        datetaskbar.innerHTML = month + '/' + day + '/' + year;
    }, 1000);
}
runclock();