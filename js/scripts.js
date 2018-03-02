$(document).ready(function(){
  $("#start").submit(function(event){
    event.preventDefault();
  var Player1=$("#player1").val();
  var Player2=$("#player2").val();
  $("#start").hide();
  $(".name1").html(Player1);
  $(".name2").html(Player2);
});
});
