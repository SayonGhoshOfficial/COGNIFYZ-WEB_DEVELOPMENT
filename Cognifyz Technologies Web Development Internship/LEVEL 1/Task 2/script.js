let Bgrdclrs = ["#8A2BE2", "#A52A2A", "#DEB887", "#7FFF00","#D2691E","#6495ED","#008B8B","#DC143C","#006400","#A9A9A9","#483D8B","#2F4F4F","#228B22","#B22222","#FFD700" ];

const btn = document.getElementById("button");

btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * Bgrdclrs.length);
  btn.style.backgroundColor = Bgrdclrs[random];
});

const timeDiv = document.getElementById("Timediv");
let time = new Date().getHours();
if(time < 12){
  timeDiv.innerHTML = `<h4>GOOD MORNING</h4>`;
}
else if(time < 18){
  timeDiv.innerHTML = `<h4>GOOD AFTERNOON</h4>`;
}
else {
  timeDiv.innerHTML = `<h4>GOOD EVENING</h4>`;
}

function btnclick(val){

  document.getElementById("screen").value += val;
}

function clearScreen(){
  document.getElementById("screen").value = "";
}

function ftnclick(val){
  document.getElementById("screen").value += val;
}

function equalto(){
  var text = document.getElementById("screen").value;
  var result = eval(text);
  document.getElementById("screen").value = result;
}