var randomNumber = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

//function for random number between 1 to 20
function randomNumberGenerator() {
    randomNumber = Math.floor(Math.random() * (20) +1);
    console.log("randome number is: " + randomNumber);

    $("#randomNumberId").html(randomNumber);
}

//function for each crystal between 1 to 20
function randomCrystalValueGenerator() {
    crystal1 = Math.floor(Math.random() * 20) +1;
    console.log("Crystal 1 value is: " + crystal1);

    crystal2 = Math.floor(Math.random() * 20) +1;
    console.log("Crystal 2 value is: " + crystal2);

    crystal3 = Math.floor(Math.random() * 20) +1;
    console.log("Crystal 3 value is: " + crystal3);

    crystal4 = Math.floor(Math.random() * 20) +1;
    console.log("Crystal 4 value is: " + crystal4);
    }           
    
//function to start

    randomNumberGenerator ();
    randomCrystalValueGenerator ();



//varaible for the score
var wins = 0;
var losses = 0;
var totalScore = 0;

//click function to increase score when it clicks
//crystal 1    
    $("#crystal1").on("click", function() {
        totalScore = totalScore + crystal1;
        console.log(totalScore);
    $("#totalScore").html(totalScore);

        //when user wins
        if (totalScore === randomNumber) {
            wins = wins +1;
            $("#wins").html(wins);
            console.log("you win");
            randomNumberGenerator();
            randomCrystalValueGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }

            //when use losses
        if (totalScore > randomNumber) {
            losses = losses +1;
            $("#losses").html(losses);
            console.log("you lose");
            randomNumberGenerator();
            randomCrystalValueGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }
    });

    //crystal 2    
    $("#crystal2").on("click", function() {
        totalScore = totalScore + crystal2;
        console.log(totalScore);
        $("#totalScore").html(totalScore);

        //when user wins
        if (totalScore === randomNumber) {
            wins = wins +1;
            $("#wins").html(wins);
            console.log("you win");
            randomNumberGenerator();
            randomCrystalValueGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }

            //when use losses
        if (totalScore > randomNumber) {
            losses = losses +1;
            $("#losses").html(losses);
            console.log("you lose");
            randomNumberGenerator();
            randomCrystalValueGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }
    });

    //crystal 3
    $("#crystal3").on("click", function() {
        totalScore = totalScore + crystal3;
        console.log(totalScore);
        $("#totalScore").html(totalScore);

        //when user wins
        if (totalScore === randomNumber) {
            wins = wins +1;
            $("#wins").html(wins);
            console.log("you win");
            randomNumberGenerator();
            randomCrystalValueGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }

            //when use losses
        if (totalScore > randomNumber) {
            losses = losses +1;
            $("#losses").html(losses);
            console.log("you lose");
            randomNumberGenerator();
            randomCrystalValueGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }
    });

    //crystal 4
    $("#crystal4").on("click", function() {
        totalScore = totalScore + crystal4;
        console.log(totalScore);
        $("#totalScore").html(totalScore);

        //when user wins
        if (totalScore === randomNumber) {
            wins = wins +1;
            $("#wins").html(wins);
            console.log("you win");
            randomNumberGenerator();
            randomCrystalValueGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }

            //when use losses
        if (totalScore > randomNumber) {
            losses = losses +1;
            $("#losses").html(losses);
            console.log("you lose");
            randomNumberGenerator();
            randomCrystalValueGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }
    });


//Reset Game
$("#reset").on("click", function() {
    wins = 0;
    losses = 0;
    totalScore = 0;
    $("#wins").html("Wins: " +0);
    $("#losses").html("Losses: " +0);
    $("#totalScore").html();
    randomNumberGenerator();
    randomCrystalValueGenerator();
});



