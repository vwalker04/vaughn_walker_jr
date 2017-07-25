$(document).ready(function (){
  $('#face').mousedown(function () {
    $(this).fadeTo(300,.25);
  });
  $('#face').mouseup(function () {
    $(this).fadeTo(300,1);
  });
});
