



//UI
$(document).ready(function(){
  $("#start").submit(function(event){
    event.preventDefault();
  var player1Name=$("#player1").val();
  var player2Name=$("#player2").val();
  $("#start").hide();
  $(".name1").html(player1Name);
  $(".name2").html(player2Name);


$("#player1roll").click(function(){
var player1Score =$("#playerScore1").html(Math.floor(Math.random()*6)+1);
var player1= new Players(player1Name, player1Score);


$("#player2roll").click(function(){
var player2Score =$("#playerScore2").html(Math.floor(Math.random()*6)+1);
var player2= new Players(player2Name, playerScore);

});
});
});






//business logic

var random= Math.floor(Math.random()*6)+1;
function Players(name,score){
  this.name=name;
  this.score;
};
alert(random);
Players.prototype.add=function(playerScore){
  return player1Score+=random;
}

});/*DOCUMENT READY*/
