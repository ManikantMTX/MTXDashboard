function clock(){
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  if(h>12){
    document.getElementById('mode').innerHTML = "PM";
  }
  else{
    document.getElementById('mode').innerHTML = "AM";
  }
  if(h>12){
    h = h - 12;
  }
  if(h<10){
    h = '0'+h;
  }
  if(m<10){
    m = '0'+m;
  }
  if(s<10){
    s = '0'+s;
  }
  document.getElementById('hour').innerHTML = h;
  document.getElementById('minute').innerHTML = m;
  document.getElementById('second').innerHTML = s;
  setTimeout(clock, 1000);
}

window.onload = clock();