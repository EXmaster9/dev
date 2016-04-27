// Code By: EX master
// Website: EX-Games.org

// ______              _   _                            
// |  ___|            | | (_)                           
// | |_ _ __ __ _  ___| |_ _  ___  _ __   ___  ___ _ __ 
// |  _| '__/ _` |/ __| __| |/ _ \| '_ \ / _ \/ _ \ '__|
// | | | | | (_| | (__| |_| | (_) | | | |  __/  __/ |   
// \_| |_|  \__,_|\___|\__|_|\___/|_| |_|\___|\___|_|   

// And Finally...
// The Code:

var frac = {};

frac.buckaroony = document.getElementById("buckaroony");
frac.words = document.getElementById("words");
frac.percentel = document.getElementById("percent");
frac.buckaroonies = 1;
frac.percent = {};
frac.percent.num = 10;
frac.backupbux = 1;
frac.click = function () {
  var fracnumber = Math.floor((Math.random() * 100));
  if (fracnumber <= frac.percent.num) {
    frac.buckaroonies = frac.buckaroonies * 2;
  }else{
    frac.buckaroonies = frac.backupbux;
  }
};
frac.sendbux = function () {
  frac.buckaroony.innerHTML = frac.buckaroonies;
  if (frac.buckaroonies == 1) {
    frac.words.innerHTML = "Buckaroonie";
  }else{
    frac.words.innerHTML = "Buckaroonies";
  }
  frac.percentel.innerHTML = frac.percent.num;
};
setInterval(function (){frac.sendbux();}, 100);
frac.percent.buy = function (amnt,cost) {
  
  
};
