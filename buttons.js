let animation;
let i = 0;

function startfunction(event){
  const rotation = function(){
    i+=3;
    line.style.transform = `rotate(${i}deg)`;
  }
  animation = setInterval(rotation, 25);
}

function stopfunction(event){
  clearInterval(animation);
}
//The small circle is situated at the end of the line, the line is made transparent
window.onload = function() {
  const circle = document.createElement("DIV");
  document.body.appendChild(circle);
  circle.id = "circle";
  const line = document.createElement("DIV");
  line.id = "line";
  circle.appendChild(line);
  const start = document.createElement("BUTTON");
  document.body.appendChild(start);
  start.innerHTML = "Start";
  start.id = "startbutton";
  const stop = document.createElement("BUTTON");
  document.body.appendChild(stop);
  stop.innerHTML = "Stop";
  stop.id = "stopbutton";
  start.setAttribute("onclick", "startfunction(event)");
  stop.setAttribute("onclick", "stopfunction(event)");
}
