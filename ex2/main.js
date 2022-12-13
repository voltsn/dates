const birthday = new Date(1997, 9, 24);
const today = new Date();

let elapsedTime = Math.floor((today.getTime() - birthday.getTime()) / 1000);
let days = Math.floor(elapsedTime / 60 / 60 / 24);
console.log(days);
