// getting elements
var tacocounter = document.getElementById("tacocounter");
var body = document.getElementById("body");
// defining taco (the main object of the code)
var taco = {tacos: 0, el: document.getElementById("taco"), tpc: 1, click: function() {this.tacos = this.tacos + this.tpc;}};
// defining shop (things that make tacos for you)
var shop = {};
shop.buy = function(item, amount){if (taco.tacos >= item.cost) {item.num = item.num + amount; taco.tacos = taco.tacos - item.cost; this.tps = this.tps + item.prod;}};
shop.tps = 0;
shop.grandpas = {num: 0, cost: 100, prod: 1};
shop.stands = {num: 0, cost: 500, prod: 10}; 
shop.trucks = {num: 0, cost: 1000, prod: 100};
shop.shacks = {num: 0, cost: 5000, prod: 1000};
shop.counties = {num: 0, cost: 10000, prod: 5000};
shop.states = {num: 0, cost: 50000, prod: 10000};
shop.countries = {num: 0, cost: 100000, prod: 50000};
shop.planets = {num: 0, cost: 500000, prod: 100000};
// sending tacos to html
setInterval(function(){tacocounter.innerHTML = taco.tacos;}, 10);
// adding tacos for tps (tacos per second) or tacos made by workers
setInterval(function(){taco.tacos = taco.tacos + shop.tps;}, 1000);
// saving feature
function save() {window.localStorage.tacos = taco.tacos; window.localStorage.tps = shop.tps;}
setInterval(save(), 15000);
// keydowns
var ee1 = ['e','x','m','a','s','t','e','r','9'];
var currentButtonIndex = 0;
var text = document.getElementById('text');
var pressedButton;
var speedClick = false;
window.addEventListener("keydown", function(evt) {
  //defining all the keys
  // space
  if (evt.keyCode == 32 && speedClick === true) {taco.click();}
  //up
  if (evt.keyCode == 38) {pressedButton = 'up';}
  //down
  if (evt.keyCode == 40) {pressedButton = 'down';}
  //left
  if (evt.keyCode == 37) {pressedButton = 'left';}
  //right
  if (evt.keyCode == 39) {pressedButton = 'right';}
  //speedClick on
  if (evt.keyCode == 192 && speedClick === false) {speedClick = true;}
  //speedClick off
  if (evt.keyCode == 192 && speedClick === true) {speedClick = false;}
  // numbers:
  //0
  if (evt.keyCode == 48) {pressedButton = '0';}
  //1
  if (evt.keyCode == 49) {pressedButton = '1';}
  //2
  if (evt.keyCode == 50) {pressedButton = '2';}
  //3
  if (evt.keyCode == 51) {pressedButton = '3';}
  //4
  if (evt.keyCode == 52) {pressedButton = '4';}
  //5
  if (evt.keyCode == 53) {pressedButton = '5';}
  //6
  if (evt.keyCode == 54) {pressedButton = '6';}
  //7
  if (evt.keyCode == 55) {pressedButton = '7';}
  //8
  if (evt.keyCode == 56) {pressedButton = '8';}
  //9
  if (evt.keyCode == 57) {pressedButton = '9';}
  //alphabet:
  //a
  if (evt.keyCode == 65) {pressedButton = 'a';}
  //b
  if (evt.keyCode == 66) {pressedButton = 'b';}
  //c
  if (evt.keyCode == 67) {pressedButton = 'c';}
  //d
  if (evt.keyCode == 68) {pressedButton = 'd';}
  //e
  if (evt.keyCode == 69) {pressedButton = 'e';}
  //f
  if (evt.keyCode == 70) {pressedButton = 'f';}
  //g
  if (evt.keyCode == 71) {pressedButton = 'g';}
  //h
  if (evt.keyCode == 72) {pressedButton = 'h';}
  //i
  if (evt.keyCode == 73) {pressedButton = 'i';}
  //j
  if (evt.keyCode == 74) {pressedButton = 'j';}
  //k
  if (evt.keyCode == 75) {pressedButton = 'k';}
  //l
  if (evt.keyCode == 76) {pressedButton = 'l';}
  //m
  if (evt.keyCode == 77) {pressedButton = 'm';}
  //n
  if (evt.keyCode == 78) {pressedButton = 'n';}
  //o
  if (evt.keyCode == 79) {pressedButton = 'o';}
  //p
  if (evt.keyCode == 80) {pressedButton = 'p';}
  //q
  if (evt.keyCode == 81) {pressedButton = 'q';}
  //r
  if (evt.keyCode == 82) {pressedButton = 'r';}
  //s
  if (evt.keyCode == 83) {pressedButton = 's';}
  //t
  if (evt.keyCode == 84) {pressedButton = 't';}
  //u
  if (evt.keyCode == 85) {pressedButton = 'u';}
  //v
  if (evt.keyCode == 86) {pressedButton = 'v';}
  //w
  if (evt.keyCode == 87) {pressedButton = 'w';}
  //x
  if (evt.keyCode == 88) {pressedButton = 'x';}
  //y
  if (evt.keyCode == 89) {pressedButton = 'y';}
  //z
  if (evt.keyCode == 90) {pressedButton = 'z';}
  // ending message
  if (currentButtonIndex === 13) {taco.tacos = 999999999999999;}
  // main code
  if (pressedButton == ee1[currentButtonIndex]) {currentButtonIndex++;}
});
//key ups
window.addEventListener("keyup", function(evt) {
    // space
  if (evt.keyCode == 32 && speedClick === false) {taco.click();}
});
// to be continued...