const myBirthDay = "23 Mar 2021";

function countDown() {
  const currentDate = new Date();
  const myBirthDate = new Date(myBirthDay);

  const totSec = (myBirthDate - currentDate) / 1000;

  const days = Math.floor(totSec / 86400);
  const hours = Math.floor(totSec / 3600) % 24;
  const minite = Math.floor(totSec / 60) % 60;
  const second = Math.floor(totSec) % 60;
  //   console.log(days, hours, minite, second);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minite").innerHTML = minite;
  document.getElementById("second").innerHTML = second;
}

countDown();

setInterval(countDown, 1000);
