const mod = document.querySelector('.mode');
mod.addEventListener('click', () => {
    document.querySelector('.mainBox').classList.toggle('dark');
    document.querySelector('.fa-sun-o').classList.toggle('fa-moon-o');
});

setInterval(() => {
    navigator.getBattery().then(function(battery) {
    var level = battery.level;
    document.querySelector('.percentage').innerHTML = (level * 100) +'%';
    });
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = 30 * hours + minutes / 2;
    const minute = 6 * minutes;
    const second = 6 * seconds;
    if(hours >= 12){
        var period = 'pm';
    }else{
        var period = 'am';
    }
    document.querySelector(".med").innerHTML = period;
    document.querySelector(".hr").style.transform = `rotate(${hour}deg)`;
    document.querySelector(".min").style.transform = `rotate(${minute}deg)`;
    document.querySelector(".sec").style.transform = `rotate(${second}deg)`;
},1000);






