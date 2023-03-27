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
    let cardImgs = [{source: "./assets/images/2oc-card.png", card: "Two of Clubs", points: 2}, {source: "./assets/images/2od-card.png", card: "Two of Diamonds", points: 2},
    {source: "./assets/images/2oh-card.png", card: "Two of Hearts", points: 2}, {source: "./assets/images/2os-card.png", card: "Two of Spades", points: 2},
    {source: "./assets/images/3oc-card.png", card: "Three of Clubs", points: 3}, {source: "./assets/images/3od-card.png", card: "Three of Diamonds", points: 3},
    {source: "./assets/images/3oh-card.png", card: "Three of Hearts", points: 3}, {source: "./assets/images/3os-card.png", card: "Three of Spades", points: 3}, 
    {source: "./assets/images/4oc-card.png", card: "Four of Clubs", points: 4}, {source: "./assets/images/4od-card.png", card: "Four of Diamonds", points: 4},
    {source: "./assets/images/4oh-card.png", card: "Four of Hearts", points: 4}, {source: "./assets/images/4os-card.png", card: "Four of Spades", points: 4},
    {source: "./assets/images/5oc-card.png", card: "Five of Clubs", points: 5}, {source: "./assets/images/5od-card.png", card: "Five of Diamonds", points: 5},
    {source: "./assets/images/5oh-card.png", card: "Five of Hearts", points: 5}, {source: "./assets/images/5os-card.png", card: "Five of Spades", points: 5},, 
    {source: "./assets/images/6oc-card.png", card: "Six of Clubs", points: 6}, {source: "./assets/images/6od-card.png", card: "Six of Diamonds", points: 6},
    {source: "./assets/images/6oh-card.png", card: "Six of Hearts", points: 6}, {source: "./assets/images/6os-card.png", card: "Six of Spades", points: 6},, 
    {source: "./assets/images/7oc-card.png", card: "Seven of Clubs", points: 7}, {source: "./assets/images/7od-card.png", card: "Seven of Diamonds", points: 7},
    {source: "./assets/images/7oh-card.png", card: "Seven of Hearts", points: 7}, {source: "./assets/images/7os-card.png", card: "Seven of Spades", points: 7}, 
    {source: "./assets/images/8oc-card.png", card: "Eight of Clubs", points: 8}, {source: "./assets/images/8od-card.png", card: "Eight of Diamonds", points: 8},
    {source: "./assets/images/8oh-card.png", card: "Eight of Hearts", points: 8}, {source: "./assets/images/8os-card.png", card: "Eight of Spades", points: 8}, 
    {source: "./assets/images/9oc-card.png", card: "Nine of Clubs", points: 9}, {source: "./assets/images/9od-card.png", card: "Nine of Diamonds", points: 9},
    {source: "./assets/images/9oh-card.png", card: "Nine of Hearts", points: 9}, {source: "./assets/images/9os-card.png", card: "Nine of Spades", points: 9}, 
    {source: "./assets/images/10oc-card.png", card: "Ten of Clubs", points: 10}, {source: "./assets/images/10od-card.png", card: "Ten of Diamonds", points: 10},
    {source: "./assets/images/10oh-card.png", card: "Ten of Hearts", points: 10}, {source: "./assets/images/10os-card.png", card: "Ten of Spades", points: 10},
    {source: "./assets/images/joc-card.png", card: "Jack of Clubs", points: 10}, {source: "./assets/images/jod-card.png", card: "Jack of Diamonds", points: 10},
    {source: "./assets/images/joh-card.png", card: "Jack of Hearts", points: 10}, {source: "./assets/images/jos-card.png", card: "Jack of Spades", points: 10}, 
    {source: "./assets/images/qoc-card.png", card: "Queen of Clubs", points: 10}, {source: "./assets/images/qod-card.png", card: "Queen of Diamonds", points: 10},
    {source: "./assets/images/qoh-card.png", card: "Queen of Hearts", points: 10}, {source: "./assets/images/qos-card.png", card: "Queen of Spades", points: 10}, 
    {source: "./assets/images/koc-card.png", card: "King of Clubs", points: 10}, {source: "./assets/images/kod-card.png", card: "King of Diamonds", points: 10},
    {source: "./assets/images/koh-card.png", card: "King of Hearts", points: 10}, {source: "./assets/images/kos-card.png", card: "King of Spades", points: 10},
    {source: "./assets/images/aoc-card.png", card: "Ace of Clubs", points: 11}, {source: "./assets/images/aod-card.png", card: "Ace of Diamonds", points: 11},
    {source: "./assets/images/aoh-card.png", card: "Ace of Hearts", points: 11}, {source: "./assets/images/aos-card.png", card: "Ace of Spades", points: 11},]
    let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
    for (let i = 0; i < cardImgs.length; i++) {
        if (drawCardNumber == i) {
            let img = document.createElement('img');
            img.src = cardImgs[i].source
            img.setAttribute('class', "card cpu-hand")
            document.getElementById('cpu2-hand').appendChild(img)
            console.log(cardImgs[i]);
        }
    }
}

function endRound() {

}

function hit() {

}

function stand() {

}

function split() {

}

function doubleDown() {

}
