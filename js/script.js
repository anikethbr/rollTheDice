function dice(){
    var diceValue=Math.floor(Math.random()*(6))+1;
    return diceValue;
}
function decideWinner(p1,p2){
    if(p1>p2){
        document.querySelector("h1").textContent="Player 1 wins!";
    }else if(p1<p2){
        document.querySelector("h1").textContent="Player 2 wins!";
    }else{
        document.querySelector("h1").textContent="Draw";
    }
}
function play(){
    var p1=dice();
    var p2=dice();
    document.querySelector(".dice .img1").setAttribute("src","images/dice"+p1+".png");
    document.querySelector(".dice .img2").setAttribute("src","images/dice"+p2+".png");
    decideWinner(p1,p2);
}
if (window.performance.navigation.type === 1) {
    play();
 }
