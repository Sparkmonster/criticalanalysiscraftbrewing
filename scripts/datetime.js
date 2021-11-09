$(document).ready(function(){
  displayDatetime();
});

function displayDatetime(){
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
}
