var Intervalid = setInterval(function(){
    updatetime();
},1000)

function updatetime() {
    var currentime = new Date();
    var hours = currentime.getHours();
    var minutes = currentime.getMinutes()
    var seconds = currentime.getSeconds();

var textString = hours.toString().padStart(2,'0') + ":" + minutes.toString().padStart(2,'0') + ":" + seconds.toString().padStart(2,'0');
document.getElementById('clockDisplay').innerText = textString;
}