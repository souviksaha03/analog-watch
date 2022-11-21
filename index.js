setInterval(() => {
    d = new Date();
    Add = 6;
    hrt = d.getHours();
    mint = d.getMinutes();
    sect = d.getSeconds();
    result = d.setDate(d.getDate() + Add);
    hor = 30 * hrt + mint / 2;
    mins = 6 * mint;
    secs = 6 * sect;
    dt = d.herDate
    hour.style.transform = `rotate(${hor}deg)`;
    min.style.transform = `rotate(${mins}deg)`;
    sec.style.transform = `rotate(${secs}deg)`;
    date.style.console.log(result);
}, 1000);
