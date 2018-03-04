//business logic

var random= Math.floor(Math.random()*6)+1;

function Players(name,score){
  this.name=name;
  this.score=0;
};

function Scores(diceroll,currentscore, totalscore){
  this.diceroll=0;
  this.currentscore=[];
  this.totalscore=0;
};



var player1= new Players();
var player2=new Players();

allplayers=["player1","player2"]

Players.prototype.roll=function(){
var random= Math.floor(Math.random()*6+1);
if(random===1){
  alert("You got a zero and lost");
}else
{
  $("#rannum1").html(random);
  var totalScore= player1.score+random;
  $("#count1").html(totalScore);
    var complete=totalScore+random;
    $("#totalcount1").html(complete);

}
};


/*Players.prototype.losepoints=function(){

}*/

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

  alert("Welcome "+ player1.name + " and " + player2.name+"!" );
});

$("#player1roll").click(function(){
var player1Score = Math.floor(Math.random()*6+1);
/*$("#playerScore1").html(player1Score);*/
player1.score=player1Score;
console.log(player1Score);
player1.roll();


});
$("#player2roll").click(function(){
var player2Score =$("#playerScore2").html(Math.floor(Math.random()*6)+1);
var player2= new Players(player2Name, playerScore);
player2.score=player2Score;



});
});/*DOCUMENT READY*/










































//UI
