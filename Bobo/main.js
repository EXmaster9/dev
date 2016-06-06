// (           )       
// ( )\       ( /(       
// )((_)  (   )\())  (   
// ((_)_   )\ ((_)\   )\  
// | _ ) ((_)| |(_) ((_) 
// | _ \/ _ \| '_ \/ _ \ 
// |___/\___/|_.__/\___/ 
// Created By: EXmaster
// I like tacos <3
// EX-Games.org
// And Finally...
// The Code:
var bobo = {};
bobo.stat = {};
bobo.level = 1;
bobo.stat.hunger = 100;
bobo.stat.health = 100;
bobo.stat.hygiene = 100;
bobo.stat.happiness = 100;
bobo.stat.misc = {};
bobo.spec = {};
bobo.spec.range = 1;
bobo.spec.attack = 1;
bobo.spec.shield = 1;
bobo.spec.stealth = 1;
bobo.stat.misc.food = 0;
bobo.coins = 100;
bobo.transact = {};
bobo.el = {};
bobo.el.itself = document.getElementById("bobo");
bobo.el.powerupsound = document.getElementById("powerup");
bobo.changeValue = function () {};
bobo.el.stats = {};
bobo.el.stats.hunger = document.getElementById("hungerel");
bobo.el.stats.hygiene = document.getElementById("hygieneel");
bobo.el.stats.happiness = document.getElementById("happinessel");
bobo.el.stats.health = document.getElementById("healthel");
bobo.el.specs = {};
bobo.el.specs.attack = document.getElementById("attackel");
bobo.el.specs.range = document.getElementById("rangeel");
bobo.el.specs.shield = document.getElementById("shieldel");
bobo.el.specs.stealth = document.getElementById("stealthel");
bobo.el.misc = {};
bobo.el.misc.coins = document.getElementById("coins");
bobo.el.misc.level = document.getElementById("level");
bobo.el.statboosts = {};
bobo.el.statboosts.steak = document.getElementById("steak");
bobo.el.statboosts.toys = document.getElementById("toys");
bobo.el.statboosts.soapbars = document.getElementById("soapbars");
bobo.el.bars = {};
bobo.el.bars.hunger = document.getElementById("barhunger");
bobo.el.bars.health = document.getElementById("barhealth");
bobo.el.bars.hygiene = document.getElementById("barhygiene");
bobo.el.bars.happiness = document.getElementById("barhappiness");
bobo.el.bars.attack = document.getElementById("barattack");
bobo.el.bars.range = document.getElementById("barrange");
bobo.el.bars.shield = document.getElementById("barshield");
bobo.el.bars.stealth = document.getElementById("barstealth");
setInterval(function () {
  bobo.counter = bobo.counter + 0.1;
  bobo.el.statboosts.steak.innerHTML = bobo.stat.misc.food;
  bobo.el.stats.hunger.innerHTML = bobo.stat.hunger;
  bobo.el.stats.health.innerHTML = bobo.stat.health;
  bobo.el.stats.hygiene.innerHTML = bobo.stat.hygiene;
  bobo.el.stats.happiness.innerHTML = bobo.stat.happiness;
  bobo.el.specs.range.innerHTML = bobo.spec.range;
  bobo.el.specs.attack.innerHTML = bobo.spec.attack;
  bobo.el.specs.shield.innerHTML = bobo.spec.shield;
  bobo.el.specs.stealth.innerHTML = bobo.spec.stealth;
  bobo.el.misc.coins.innerHTML = bobo.coins;
  bobo.el.misc.level.innerHTML = bobo.level;
  bobo.el.bars.hunger.style.width = bobo.stat.hunger + "%";
  bobo.el.bars.health.style.width = bobo.stat.health + "%";
  bobo.el.bars.hygiene.style.width = bobo.stat.hygiene + "%";
  bobo.el.bars.happiness.style.width = bobo.stat.happiness + "%";
  bobo.el.bars.attack.style.width = bobo.stat.attack + "%";
  bobo.el.bars.range.style.width = bobo.stat.range + "%";
  bobo.el.bars.shield.style.width = bobo.stat.shield + "%";
  bobo.el.bars.stealth.style.width = bobo.stat.stealth + "%";
}, 10);
bobo.feed = function () {if (bobo.stat.misc.food >= 1 && bobo.stat.hunger < 100) {bobo.el.powerupsound.play(); bobo.stat.misc.food = bobo.stat.misc.food - 1; bobo.stat.hunger = bobo.stat.hunger + 10;}if (bobo.stat.hunger > 100){bobo.stat.hunger = 100;}};
bobo.hunt = function() {
  var getfood = Math.floor((Math.random() * 100));
  if (getfood <= 50) {
    bobo.stat.misc.food = bobo.stat.misc.food + 1;
  }
  var getattacked = Math.floor((Math.random() * 100));
  if (getattacked <= bobo.spec.stealth * 1.5) {
    bobo.stat.health = bobo.stat.health - 10;
  }
};

document.getElementById("feedbutton").onclick = bobo.feed();
document.getElementById("huntbutton").onclick = bobo.hunt();
document.getElementById("bathebutton").onclick = bobo.bathe();
document.getElementById("playbutton").onclick = bobo.play();








