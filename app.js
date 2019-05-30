function startGame() {

    document.winner = null;
    document.turn = "X";
    document.count = 0;


    setMessage(document.turn + " get's to start.")
        //this is to class and invoke the clearBox function
    for (var i = 1; i <= 9; i++) {
        clearBox(i)
    }
}

//in order to give access to the square, we need to give the click event handler properties.

function nextMove(square) {

    if (document.winner != null) {
        setMessage(document.turn + "ALREADY THE WINNER!!!")
    } else if (square.innerText == '') {

        square.innerText = document.turn;
        switchTurn();
        document.count += 1;

    } else {
        setMessage("Pick an empty square please.")
    }
    //DRAW PART DOES NOT WORK.
    if (document.count && !document.winner == 9) {
        setMessage("IT A DRAW!!!")
    }
}

//need a function to switch document.turn to O to switch the turn

function switchTurn() {

    if (checkForWinner(document.turn)) {
        setMessage("Congrats!!!" + document.turn + " YOU ARE THE WINNER!")

        //here the document.winner is not the null anymore.
        document.winner = document.turn;

    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn.")
    } else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn.")
    }

    // Alternate to display turn message of X/O turn functionality => setMessage("It's " + document.turn + "'s turn.");



}

//div id = "message" in line 42 in the html page is the one getting message, so need to target that and create a function
//this function is going to find inner text to msg

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

//creating the winning function. Should give an id to square classes in html page
//we can call the getBox and compare the value in checkRow function. Boolean is the way to go
function checkRow(a, b, c, move) {

    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {

    return document.getElementById("s" + number).innerText;

}

//reset function instead of reloading the page.
function clearBox(number) {

    document.getElementById("s" + number).innerText = "";
}

//winning combination. Should be able to invoke it from the html page.

function checkForWinner(move) {

    var result = false;
    if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;

}