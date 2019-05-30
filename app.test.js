//unit test, in this function, msg is compared with setMessage1
function testsetMessage() {
    var msg = "Welcome to my Tic-Tac-Toe Game";
    var setMessage1 = setMessage.call(msg);
    if (msg == setMessage1) {
        console.log("PASS!")
    } else {
        console.log("FAIL!")
    }
}


//integration testing
function testSwithchTurn() {


}