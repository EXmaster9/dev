// getting elements
var tacocounter = document.getElementById("tacocounter");
var tpscounter = document.getElementById("tpscounter");
var body = document.getElementById("body");
var grandpas = document.getElementById("grandpas");
var stands = document.getElementById("stands");
var trucks = document.getElementById("trucks");
var shacks = document.getElementById("shacks");
var counties = document.getElementById("counties");
var states = document.getElementById("states");
var countries = document.getElementById("countries");
var planets = document.getElementById("planets");
var solarsystems = document.getElementById("solarsystems");
var galaxies = document.getElementById("galaxies");
var universes = document.getElementById("universes");
var growthrays = document.getElementById("growthrays");
var lettucelaser = document.getElementById("lettucelasers");
var meatmountains = document.getElementById("meatmountains");
// defining taco (the main object of the code)
var taco = {tacos: 0, el: document.getElementById("taco"), click: function() {this.tacos = this.tacos + boosts.tpc;}};
// defining shop (things that make tacos for you)
var shop = {};
shop.buy = function(item, amount, minus){if (taco.tacos >= item.cost) {minus.innerHTML = item.num; item.num = item.num + amount; taco.tacos = taco.tacos - item.cost; this.tps = this.tps + item.prod;}};
shop.tps = 0;
shop.grandpas =      {num: 1, cost: 100, prod: 1};
shop.stands =        {num: 1, cost: 500, prod: 5}; 
shop.trucks =        {num: 1, cost: 1000, prod: 10};
shop.shacks =        {num: 1, cost: 5000, prod: 50};
shop.counties =      {num: 1, cost: 10000, prod: 100};
shop.states =        {num: 1, cost: 50000, prod: 500};
shop.countries =     {num: 1, cost: 100000, prod: 1000};
shop.planets =       {num: 1, cost: 500000, prod: 5000};
shop.solarsystems =  {num: 1, cost: 1000000, prod: 10000};
shop.galaxies =      {num: 1, cost: 5000000, prod: 50000};
shop.universes =     {num: 1, cost: 10000000, prod: 100000};
shop.growthrays =    {num: 1, cost: 50000000, prod: 500000};
shop.lettucelasers = {num: 1, cost: 100000000, prod: 1000000};
shop.meatmountains = {num: 1, cost: 500000000, prod: 5000000};
// defining boosts (things that give you more tpc)
var boosts = {};
boosts.buy = function(item, amount, minus) {if (taco.tacos >= item.cost) {minus.innerHTML = item.num; item.num = item.num + amount; taco.tacos = taco.tacos - item.cost; this.tpc = this.tpc + item.prod;}};
boosts.tpc = 1;
// sending tacos and tps to html
setInterval(function(){tacocounter.innerHTML = taco.tacos;}, 10);
setInterval(function(){tpscounter.innerHTML = shop.tps;}, 10);
// adding tacos for tps (tacos per second) or tacos made by workers
setInterval(function(){taco.tacos = taco.tacos + shop.tps;}, 1000);
// saving feature
function save() {window.localStorage.tacos = taco.tacos; window.localStorage.tps = shop.tps;}
function importsave() {taco.tacos = window.localStorage.tacos; parseInt(window.localStorage.tps); shop.tps = window.localStorage.tps;}
// keydowns
var ee1 = ['e','x','m','a','s','t','e','r','9'];
var currentButtonIndex = 0;
var text = document.getElementById('text');
var pressedButton;
var speedClick = false;
window.addEventListener("keydown", function(evt) {
  //defining all the keys
  //up
  if (evt.keyCode == 38) {pressedButton = 'up';}
  //down
  if (evt.keyCode == 40) {pressedButton = 'down';}
  //left
  if (evt.keyCode == 37) {pressedButton = 'left';}
  //right
  if (evt.keyCode == 39) {pressedButton = 'right';}
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
  if (evt.keyCode == 32) {taco.click();}
});
// to be continued...