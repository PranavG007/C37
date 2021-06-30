class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
play(){
form.hide()
text("Game Start",100,100)
Player.playerinfo()
if(allPlayers!==undefined)
{
var displayPosition=130
for(var plr in allPlayers){
displayPosition=displayPosition+20
text(allPlayers[plr].name+":"+allPlayers[plr].distance,100,displayPosition)

}}


if(keyIsDown(UP_ARROW)&& player.index!==null){
player.distance=player.distance+100
player.update()
}



}


}
