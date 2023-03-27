//Waits for the DOM to finish loading before beginning the first round
//Gets the bet's input element and adds an event listener to it
//Checks to ensure player's bet is valid and if valid
//will remove player's bet from winnings
document.addEventListener("DOMContentLoaded", function() {
    let bet = document.getElementById('bet');
    bet.addEventListener('keypress', function collectBets(event) {
        if (event.key === "Enter") {
            if (this.valueAsNumber === 0) {
                alert("You gotta pay to play round 'ere")
            } else if (this.valueAsNumber < 0) {
                alert("I ain't givin' you money!")
            } else if (this.valueAsNumber > parseFloat(document.getElementById('score').innerHTML)) {
                alert("I'm sorry kiddo, we don't accept pretend money here...")
            } else {
                alert("Collecting bets ...")
                let subtractBet = (this.valueAsNumber);
                let oldScore = parseFloat(document.getElementById('score').innerHTML);
                let newScore = oldScore - subtractBet;
                let bet = document.getElementById('bet')
                document.getElementById('score').innerHTML = newScore;
                bet.setAttribute("max", newScore);
                bet.removeEventListener('keypress', collectBets);
                bet.value = ''
                beginRound();
            }
        }
    })
})



function beginRound() {
    let cardImgs = [`<img src="./assets/images/2oc-card.png" data-type="2" class="card" Alt="Two of Clubs">`, `<img src="./assets/images/2od-card.png" data-type="2" class="card" Alt="Two of Diamonds">`,
    `<img src="./assets/images/2oh-card.png" data-type="2" class="card" Alt="Two of Hearts">`, `<img src="./assets/images/2os-card.png" data-type="2" class="card" Alt="Two of Spades">`,
    `<img src="./assets/images/3oc-card.png" data-type="3" class="card" Alt="Three of Clubs">`, `<img src="./assets/images/3od-card.png" data-type="3" class="card" Alt="Three of Diamonds">`,
    `<img src="./assets/images/3oh-card.png" data-type="3" class="card" Alt="Three of Hearts">`, `<img src="./assets/images/2os-card.png" data-type="3" class="card" Alt="Three of Spades">`, 
    `<img src="./assets/images/4oc-card.png" data-type="4" class="card" Alt="Four of Clubs">`, `<img src="./assets/images/4od-card.png" data-type="4" class="card" Alt="Four of Diamonds">`,
    `<img src="./assets/images/2oh-card.png" data-type="4" class="card" Alt="Four of Hearts">`, `<img src="./assets/images/2os-card.png" data-type="4" class="card" Alt="Four of Spades">`,
    `<img src="./assets/images/5oc-card.png" data-type="5" class="card" Alt="Five of Clubs">`, `<img src="./assets/images/5od-card.png" data-type="5" class="card" Alt="Five of Diamonds">`,
    `<img src="./assets/images/5oh-card.png" data-type="5" class="card" Alt="Five of Hearts">`, `<img src="./assets/images/5os-card.png" data-type="5" class="card" Alt="Five of Spades">`, 
    `<img src="./assets/images/6oc-card.png" data-type="6" class="card" Alt="Six of Clubs">`, `<img src="./assets/images/6od-card.png" data-type="6" class="card" Alt="Six of Diamonds">`,
    `<img src="./assets/images/6oh-card.png" data-type="6" class="card" Alt="Six of Hearts">`, `<img src="./assets/images/6os-card.png" data-type="6" class="card" Alt="Six of Spades">`, 
    `<img src="./assets/images/7oc-card.png" data-type="7" class="card" Alt="Seven of Clubs">`, `<img src="./assets/images/7od-card.png" data-type="7" class="card" Alt="Seven of Diamonds">`,
    `<img src="./assets/images/7oh-card.png" data-type="7" class="card" Alt="Seven of Hearts">`, `<img src="./assets/images/7os-card.png" data-type="7" class="card" Alt="Seven of Spades">`, 
    `<img src="./assets/images/8oc-card.png" data-type="8" class="card" Alt="Eight of Clubs">`, `<img src="./assets/images/8od-card.png" data-type="8" class="card" Alt="Eight of Diamonds">`,
    `<img src="./assets/images/8oh-card.png" data-type="8" class="card" Alt="Eight of Hearts">`, `<img src="./assets/images/8os-card.png" data-type="8" class="card" Alt="Eight of Spades">`, 
    `<img src="./assets/images/9oc-card.png" data-type="9" class="card" Alt="Nine of Clubs">`, `<img src="./assets/images/9od-card.png" data-type="9" class="card" Alt="Nine of Diamonds">`,
    `<img src="./assets/images/9oh-card.png" data-type="9" class="card" Alt="Nine of Hearts">`, `<img src="./assets/images/9os-card.png" data-type="9" class="card" Alt="Nine of Spades">`, 
    `<img src="./assets/images/10oc-card.png" data-type="10" class="card" Alt="Ten of Clubs">`, `<img src="./assets/images/10od-card.png" data-type="10" class="card" Alt="Ten of Diamonds">`,
    `<img src="./assets/images/10oh-card.png" data-type="10" class="card" Alt="Ten of Hearts">`, `<img src="./assets/images/10os-card.png" data-type="10" class="card" Alt="Ten of Spades">`, 
    `<img src="./assets/images/joc-card.png" data-type="10" class="card" Alt="Jack of Clubs">`, `<img src="./assets/images/jod-card.png" data-type="10" class="card" Alt="Jack of Diamonds">`,
    `<img src="./assets/images/joh-card.png" data-type="10" class="card" Alt="Jack of Hearts">`, `<img src="./assets/images/jos-card.png" data-type="10" class="card" Alt="Jack of Spades">`, 
    `<img src="./assets/images/qoc-card.png" data-type="10" class="card" Alt="Queen of Clubs">`, `<img src="./assets/images/qod-card.png" data-type="10" class="card" Alt="Queen of Diamonds">`,
    `<img src="./assets/images/qoh-card.png" data-type="10" class="card" Alt="Queen of Hearts">`, `<img src="./assets/images/qos-card.png" data-type="10" class="card" Alt="Queen of Spades">`, 
    `<img src="./assets/images/koc-card.png" data-type="10" class="card" Alt="King of Clubs">`, `<img src="./assets/images/kod-card.png" data-type="10" class="card" Alt="King of Diamonds">`,
    `<img src="./assets/images/koh-card.png" data-type="10" class="card" Alt="King of Hearts">`, `<img src="./assets/images/kos-card.png" data-type="10" class="card" Alt="King of Spades">`, 
    `<img src="./assets/images/aoc-card.png" data-type="11" class="card" Alt="Ace of Clubs">`, `<img src="./assets/images/aod-card.png" data-type="11" class="card" Alt="Ace of Diamonds">`,
    `<img src="./assets/images/aoh-card.png" data-type="11" class="card" Alt="Ace of Hearts">`, `<img src="./assets/images/aos-card.png" data-type="11" class="card" Alt="Ace of Spades">`,  ]
    let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
    for (let i = 0; i < cardImgs.length; i++) {
        if (drawCardNumber == i) {
            let card =
            document.write = cardImgs[i]
            console.log(cardImgs[i]);
        }
    }
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
