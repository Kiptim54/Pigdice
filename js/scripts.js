//business logic

var random= Math.floor(Math.random()*6)+1;

function Players(name,score){
  this.name=name;
  this.score;
};
var player1= new Players();
var player2=new Players();

Players.prototype.roll=function(){
var random= Math.floor(Math.random()*6)+1;
if(random!==1){
  alert(player1Score+=random);
}else{
  alert("You got a zero and lost")
}
}

//UI
$(document).ready(function(){
  $("#start").submit(function(event){
    event.preventDefault();
  var player1Name=$("#player1").val();
  var player2Name=$("#player2").val();
  $("#start").hide();
  $(".name1").html(player1Name);
  $(".name2").html(player2Name);
  player1.name=player1Name;
  player2.name=player2Name;

  alert(player1.name);
});

$("#player1roll").click(function(){
var player1Score =$("#playerScore1").html(Math.floor(Math.random()*6)+1);
player1.score=player1Score;
console.log(player1.score);


});
$("#player2roll").click(function(){
var player2Score =$("#playerScore2").html(Math.floor(Math.random()*6)+1);
var player2= new Players(player2Name, playerScore);
player2.score=player2Score;



});
});/*DOCUMENT READY*/
