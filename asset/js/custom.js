


let secElem = document.querySelector('.scn');
let minElem = document.querySelector('.mn');
let hrElem = document.querySelector('.hr');

function staryClock() {
  let d = new Date();

  let scn = d.getSeconds() / 60;
  let mn = (scn + d.getMinutes()) / 60;
  let hr = (mn + d.getHours()) / 12;

    secElem.style.transform = `rotate(${scn * 360}deg)`;
    minElem.style.transform = `rotate(${mn * 360}deg)`;
    hrElem.style.transform = `rotate(${hr * 360}deg)`;


}

setInterval(staryClock, 1000)