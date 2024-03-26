function displayTime() {
    var d = new Date()
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second
}

setInterval(displayTime, 1000);