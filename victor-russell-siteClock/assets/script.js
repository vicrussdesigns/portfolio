var drop = document.getElementById('container');

var today = new Date();
var hour = today.getHours();

var main = document.querySelector("main");

if (hour == 0) {
	main.style.height = "0vh";
}
if (hour == 1) {
	main.style.height = "3.5vh";
}
if (hour == 2) {
	main.style.height = "7vh";
}
if (hour == 3) {
	main.style.height = "10.5vh";
}
if (hour == 4) {
	main.style.height = "14vh";
}
if (hour == 5) {
	main.style.height = "17.5vh";
}
if (hour == 6) {
	main.style.height = "21vh";
}
if (hour == 7) {
	main.style.height = "24.5vh";
}
if (hour == 8) {
	main.style.height = "27vh";
}
if (hour == 9) {
	main.style.height = "30.5vh";
}
if (hour == 10) {
	main.style.height = "34vh";
}
if (hour == 11) {
	main.style.height = "37.5vh";
}
if (hour == 12) {
	main.style.height = "41vh";
}
if (hour == 13) {
	main.style.height = "44.5vh";
}
if (hour == 14) {
	main.style.height = "48vh";
}
if (hour == 15) {
	main.style.height = "51.5vh";
}
if (hour == 16) {
	main.style.height = "55vh";
}
if (hour == 17) {
	main.style.height = "58.5vh";
}
if (hour == 18) {
	main.style.height = "61.5vh";
}
if (hour == 19) {
	main.style.height = "65vh";
}
if (hour == 20) {
	main.style.height = "68.5vh";
}
if (hour == 21) {
	main.style.height = "72vh";
}
if (hour == 22) {
	main.style.height = "75.5vh";
}
if (hour == 23) {
	main.style.height = "79vh";
}


var drop = hour;
drop.textContent = drop;

setInterval(drop, 1);