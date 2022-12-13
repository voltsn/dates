const brussels = new Date();
document.querySelector("#local").innerText = brussels.toLocaleString();

const usa = new Date();
usa.setUTCHours(usa.getUTCHours() - 9);
document.querySelector("#usa").innerText = usa.toUTCString();

const iceland = new Date();
document.querySelector("#iceland").innerText = iceland.toUTCString();

const russia = new Date();
russia.setUTCHours(russia.getUTCHours() + 3);
document.querySelector("#russia").innerText = russia.toUTCString();
