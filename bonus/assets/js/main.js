const dayDisplay = document.querySelector("#day-display");
const yearDisplay = document.querySelector("#year-display");

const uiMonth = document.querySelector("#month");
const uiDay = document.querySelector("#day-num");

const uiHours = document.querySelector("#hours");
const uiMinutes = document.querySelector("#minutes");
const uiSeconds = document.querySelector("#seconds");
let isAm = false;

setInterval(clock, 1000);
uiHours.addEventListener("click", ()=>{
  isAm = isAm == false ? true : false;
});

function clock() {
  const now = new Date();
  const dateArray = now.toString().split(" ");
  let hours, minutes, seconds;
  if (!isAm){
    hours = now.getHours() > 9 ? now.getHours() + "" : ` 0${now.getHours()}`;
  }else{
    hours = now.getHours() == 12 ? 12 : now.getHours() % 12;
    hours = hours > 9 ? hours : `0${hours}`;
  }
  minutes = now.getMinutes() > 9 ? now.getMinutes() + "" : `0${now.getMinutes()}`;
  seconds = now.getSeconds() > 9 ? now.getSeconds() : `0${now.getSeconds()}`;

  displayDate(dateArray[3], dateArray[1], dateArray[0], dateArray[2]);
  displayTime(hours, minutes, seconds);
}

const displayDate = (year, month, day, dayNum) => {
  dayDisplay.innerText = day;
  yearDisplay.innerText = year;

  uiDay.innerText = dayNum;
  uiMonth.innerText = month;
}

const displayTime = (h, m, s) => {
  uiHours.innerText = h;
  uiMinutes.innerText = m;
  uiSeconds.innerText = s;
}
