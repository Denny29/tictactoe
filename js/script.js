let player = ["X","O"];
let turn = 0;
let game = false; 
let currentPlayer = "O";



function performLogic(buttonId , tileId){  

    function changePlayer(){
        if (currentPlayer === "X"){
            currentPlayer="O";
        }
        else if (currentPlayer==="O") {
            currentPlayer="X";
        }
    }
    console.log(currentPlayer)
    changePlayer();
    $(tileId).html(currentPlayer);
    turn = turn + 1;
    if("#tile1"="#tile2"){

    }
    else if (turn === 9){
        $("#title").html("It's a Draw!");
    }
    
}



$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

