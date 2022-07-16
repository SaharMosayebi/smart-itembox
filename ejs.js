$(document).ready(function () {
  $("#switch").change(function () {
    if ($(this).prop("checked") == true) {
      $(".bulb").css("color", "rgb(0,226,244");

      //onclick="document.getElementById('myImage').src='img/bulb/pic_bulbon.gif'"
    } else {
      $(".bulb").css("color", "rgb(30,30,30)");

      //  onclick="document.getElementById('myImage').src='img/bulb/pic_bulboff.gif'"
    }
  });
});
setInterval(myTimer, 5000);
function myTimer() {
  n = 1;
  while (n < 100) {
    document.getElementById("demot").innerHTML =
      Math.floor(Math.random() * 10) + 25;
    n += 1;
  }
}
