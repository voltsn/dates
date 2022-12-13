const dateDisplay = document.querySelector("#date-display");
const hoursInput = document.querySelector("#hoursInput");

hoursInput.addEventListener("keyup", (e) => {
  if (e.code === "ArrowUp" || e.code === "ArrowDown"){
    let hours = Number(e.target.value);
    if (hours < 0 ){
      return;
    }
    let dateTime = getDateFrom(hours);
    dateDisplay.innerText = dateTime.toLocaleString();
  }
});

function getDateFrom(hours) {
  // Convert hours to milliseconds
  let ms = hours * 60 * 60 * 1000;
  let now = Date.now();
  return new Date(now + ms);
}

console.log(`In 80000 hours it will be ${getDateFrom(80000)}`);
