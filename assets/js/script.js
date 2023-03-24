//Waits for the DOM to finish loading before beginning the first round
//Gets the bets input element and adds an event listener to it
document.addEventListener("DOMContentLoaded", function() {
    let bet = document.getElementById('bet');
    bet.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            if (this.valueAsNumber === 0) {
                alert("You gotta pay to play round 'ere")
            } else { beginRound();
                alert("Collecting bets")
            }
        }
    })

})



function beginRound() {

}

function endRound() {

}

function dealWholeTable() {

}

function hit() {

}

function stand() {

}

function split() {

}

function doubleDown() {

}

function determineMaxBet() {

}
