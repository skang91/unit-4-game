 var wins = 0;
 var losses = 0;
 var totalScore = 0;
    $('#totalScore').text(totalScore);

//function for random number between 10 to 100
let randNumber = Math.floor(Math.random() * ((100-10) +1) +1);
    $('#randNum').html(randNumber);

//function for each crystal between 1 to 20
let crystal1 = math.floor(Math.random() * 20) +1;
let crystal2 = math.floor(Math.random() * 20) +1;
let crystal3 = math.floor(Math.random() * 20) +1;
let crystal4 = math.floor(Math.random() * 20) +1;

//function for win
function win() {
    wins= wins +1;
    $('#wins').text(wins);

}

//function for lose
function lose() {
    losses = losses +1;
    $('#losses').text(losses);
}

$('#crystal1').click(function() {
    totalScore = totalScore + crystal1
    $('#totalScore').text(totalScore);
    if (totalScore === ranNumber) {
        win();

    } else if (totalScore >randNumber) {
        lose();

    }
});