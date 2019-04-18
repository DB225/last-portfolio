function isValid(td) {
    return td.innerHTML.length === 0;
}
function setSymbol(btn, symbole) {
    btn.innerHTML = symbole;
}

function tied(pieces) {
    for(var i=0, len = pieces.length; i<len; i++){
        if(pieces[i].innerHTML.length === 0){
            return false;
        }
    }
    return true;
}

function searchWinner(pieces,players,currentPlayer){
    if(pieces[0].innerHTML === players[currentPlayer] &&
        pieces[1].innerHTML === players[currentPlayer] &&
        pieces[2].innerHTML === players[currentPlayer]){
        return true;
    }
    if(pieces[3].innerHTML === players[currentPlayer] &&
        pieces[4].innerHTML === players[currentPlayer] &&
        pieces[5].innerHTML === players[currentPlayer]){
        return true;
    }
    if(pieces[6].innerHTML === players[currentPlayer] &&
        pieces[7].innerHTML === players[currentPlayer] &&
        pieces[8].innerHTML === players[currentPlayer]){
        return true;
    }
    if(pieces[0].innerHTML === players[currentPlayer] &&
        pieces[3].innerHTML === players[currentPlayer] &&
        pieces[6].innerHTML === players[currentPlayer]){
        return true;
    }
    if(pieces[1].innerHTML === players[currentPlayer] &&
        pieces[4].innerHTML === players[currentPlayer] &&
        pieces[7].innerHTML === players[currentPlayer]){
        return true;
    } if(pieces[2].innerHTML === players[currentPlayer] &&
        pieces[5].innerHTML === players[currentPlayer] &&
        pieces[8].innerHTML === players[currentPlayer]){
        return true;
    }
    if(pieces[0].innerHTML === players[currentPlayer] &&
        pieces[4].innerHTML === players[currentPlayer] &&
        pieces[8].innerHTML === players[currentPlayer]){
        return true;
    }
    if(pieces[2].innerHTML === players[currentPlayer] &&
        pieces[4].innerHTML === players[currentPlayer] &&
        pieces[6].innerHTML === players[currentPlayer]){
        return true;
    }

}

var Display = function (element) {
    var display = element;
    function setText(message) {
        display.innerHTML = message;
    }
    return {sendMessage : setText }
};



function main() {
    var pieces = document.querySelectorAll('td');
    var players = ['X', 'O'];
    var currentPlayer = 0;
    var gameOver = false;
    var view = new Display(document.querySelector('#gameStatus'));

    view.sendMessage("<h3>Let's go!!! <br> Next &rAarr; Player"+(currentPlayer+1));

    for(var i=0, len = pieces.length; i<len; i++){
        pieces[i].addEventListener('click', function () {
            if(gameOver){
                return;
            }
            if(!isValid(this)){
                view.sendMessage("Invalid Box :(");
            }
            else{
                setSymbol(this, players[currentPlayer]);
                var endGame = searchWinner(pieces,players,currentPlayer);

                // Somebody won
                if(endGame){
                    view.sendMessage("<h4>Winner: Player "+(currentPlayer+1)+" \_(^_^)_/" +
                        "<br> <button style='width: 100px; height: 50px; border-radius: 10px; background-color: navy; font-size: 20px'><a style='text-decoration: none; color: white' href=../html/ticTacToe.html\>Restart</a></button>");
                    return;
                }
                //Tied
                if(tied(pieces)){
                    view.sendMessage("<h3>Tied! |_(-_-)_|" +
                        "<br> <button style='width: 100px; height: 50px; border-radius: 10px; background-color: navy; font-size: 20px'><a style='text-decoration: none; color: white' href=../html/ticTacToe.html\>Restart</a></button>");
                    return;
                }

                //Next Player
                currentPlayer = currentPlayer ^ 1;
                view.sendMessage("<h3>Next &rAarr; Player "+(currentPlayer+1))
            }
        })
    }
}
main();