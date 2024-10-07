setInterval(() => {
    const d = new Date();
    const dhours = d.getHours();
    const dmins = d.getMinutes();
    const dsecs = d.getSeconds();
    const hrot = 30*dhours + dmins/2;
    const mrot = 6*dmins;
    const srot = 6*dsecs;
    document.getElementById("hour").style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;
   
}, 1000);