let cardImgs = [{source: "./assets/images/2oc-card.png", card: "Two of Clubs", points: 2, face: "two"}, {source: "./assets/images/2od-card.png", card: "Two of Diamonds", points: 2, face: "two"},
    {source: "./assets/images/2oh-card.png", card: "Two of Hearts", points: 2, face: "two"}, {source: "./assets/images/2os-card.png", card: "Two of Spades", points: 2, face: "two"},
    {source: "./assets/images/3oc-card.png", card: "Three of Clubs", points: 3, face: "three"}, {source: "./assets/images/3od-card.png", card: "Three of Diamonds", points: 3, face: "three"},
    {source: "./assets/images/3oh-card.png", card: "Three of Hearts", points: 3, face: "three"}, {source: "./assets/images/3os-card.png", card: "Three of Spades", points: 3, face: "three"},
    {source: "./assets/images/4oc-card.png", card: "Four of Clubs", points: 4, face: "four"}, {source: "./assets/images/4od-card.png", card: "Four of Diamonds", points: 4, face: "four"},
    {source: "./assets/images/4oh-card.png", card: "Four of Hearts", points: 4, face: "four"}, {source: "./assets/images/4os-card.png", card: "Four of Spades", points: 4, face: "four"},
    {source: "./assets/images/5oc-card.png", card: "Five of Clubs", points: 5, face: "five"}, {source: "./assets/images/5od-card.png", card: "Five of Diamonds", points: 5, face: "five"},
    {source: "./assets/images/5oh-card.png", card: "Five of Hearts", points: 5, face: "five"}, {source: "./assets/images/5os-card.png", card: "Five of Spades", points: 5, face: "five"}, 
    {source: "./assets/images/6oc-card.png", card: "Six of Clubs", points: 6, face: "six"}, {source: "./assets/images/6od-card.png", card: "Six of Diamonds", points: 6, face: "six"},
    {source: "./assets/images/6oh-card.png", card: "Six of Hearts", points: 6, face: "six"}, {source: "./assets/images/6os-card.png", card: "Six of Spades", points: 6, face: "six"}, 
    {source: "./assets/images/7oc-card.png", card: "Seven of Clubs", points: 7, face: "seven"}, {source: "./assets/images/7od-card.png", card: "Seven of Diamonds", points: 7, face: "seven"},
    {source: "./assets/images/7oh-card.png", card: "Seven of Hearts", points: 7, face: "seven"}, {source: "./assets/images/7os-card.png", card: "Seven of Spades", points: 7, face: "seven"}, 
    {source: "./assets/images/8oc-card.png", card: "Eight of Clubs", points: 8, face: "eight"}, {source: "./assets/images/8od-card.png", card: "Eight of Diamonds", points: 8, face: "eight"},
    {source: "./assets/images/8oh-card.png", card: "Eight of Hearts", points: 8, face: "eight"}, {source: "./assets/images/8os-card.png", card: "Eight of Spades", points: 8, face: "eight"}, 
    {source: "./assets/images/9oc-card.png", card: "Nine of Clubs", points: 9, face: "nine"}, {source: "./assets/images/9od-card.png", card: "Nine of Diamonds", points: 9, face: "nine"},
    {source: "./assets/images/9oh-card.png", card: "Nine of Hearts", points: 9, face: "nine"}, {source: "./assets/images/9os-card.png", card: "Nine of Spades", points: 9, face: "nine"}, 
    {source: "./assets/images/10oc-card.png", card: "Ten of Clubs", points: 10, face: "ten"}, {source: "./assets/images/10od-card.png", card: "Ten of Diamonds", points: 10, face: "ten"},
    {source: "./assets/images/10oh-card.png", card: "Ten of Hearts", points: 10, face: "ten"}, {source: "./assets/images/10os-card.png", card: "Ten of Spades", points: 10, face: "ten"},
    {source: "./assets/images/joc-card.png", card: "Jack of Clubs", points: 10, face: "jack"}, {source: "./assets/images/jod-card.png", card: "Jack of Diamonds", points: 10, face: "jack"},
    {source: "./assets/images/joh-card.png", card: "Jack of Hearts", points: 10, face: "jack"}, {source: "./assets/images/jos-card.png", card: "Jack of Spades", points: 10, face: "jack"}, 
    {source: "./assets/images/qoc-card.png", card: "Queen of Clubs", points: 10, face: "queen"}, {source: "./assets/images/qod-card.png", card: "Queen of Diamonds", points: 10, face: "queen"},
    {source: "./assets/images/qoh-card.png", card: "Queen of Hearts", points: 10, face: "queen"}, {source: "./assets/images/qos-card.png", card: "Queen of Spades", points: 10, face: "queen"}, 
    {source: "./assets/images/koc-card.png", card: "King of Clubs", points: 10, face: "king"}, {source: "./assets/images/kod-card.png", card: "King of Diamonds", points: 10, face: "king"},
    {source: "./assets/images/koh-card.png", card: "King of Hearts", points: 10, face: "king"}, {source: "./assets/images/kos-card.png", card: "King of Spades", points: 10, face: "king"},
    {source: "./assets/images/aoc-card.png", card: "Ace of Clubs", points: 11, face: "ace"}, {source: "./assets/images/aod-card.png", card: "Ace of Diamonds", points: 11, face: "ace"},
    {source: "./assets/images/aoh-card.png", card: "Ace of Hearts", points: 11, face: "ace"}, {source: "./assets/images/aos-card.png", card: "Ace of Spades", points: 11, face: "ace"},]

let discardPile = []

let playerHand = []

let playerScore = 0

let cpu1Hand = []

let cpu1Score = 0

let cpu2Hand = []

let cpu2Score = 0

let dealerHand = []

let dealerScore = 0

let playerBet = []

//Gets the bet's input element and adds an event listener to it
//Checks to ensure player's bet is valid and if valid
//will remove player's bet from winnings
let betInput = document.getElementById('bet');
    betInput.addEventListener('keypress', function collectBets(event) {
        if (event.key === "Enter") {
            if (this.valueAsNumber === 0) {
                alert("You gotta pay to play round 'ere")
            } else if (this.valueAsNumber < 0) {
                alert("I ain't givin' you money!")
            } else if (this.valueAsNumber > parseFloat(document.getElementById('score').innerHTML)) {
                alert("I'm sorry kiddo, we don't accept pretend money here...")
            } else if (this.value == "") {
                alert("Well, kiddo, we're waiting on ya...")
            } else {
                alert("Collecting bets ...")
                let subtractBet = (this.valueAsNumber);
                let oldScore = parseFloat(document.getElementById('score').innerHTML);
                let newScore = oldScore - subtractBet;
                let betInput = document.getElementById('bet')
                document.getElementById('score').innerHTML = newScore;
                betInput.setAttribute("max", newScore);
                betInput.removeEventListener('keypress', collectBets);
                betInput.value = ''
                playerBet.push(subtractBet)
                console.log(playerBet[0])
                beginRound();
            }
        }
    })

function beginRound() {
    if (cardImgs.length != 0) { 
        for (let i = 0; i < 8; i++) {
            if (i == 0) {
                dealCpu1();
            } else if (i == 1) {
                dealPlayer();
            } else if (i == 2) {
                dealCpu2();
            } else if (i == 3) {
                dealDealerUp();
            } else if (i == 4) {
                dealCpu1();
            } else if (i == 5) {
                dealPlayer();
            } else if (i == 6) {
                dealCpu2();
            } else if (i == 7) {
                dealDealerDown();
            }
        }
    testForBlackjack();
    } else {
        for (const obj of discardPile) {
            cardImgs.push(copy(obj));
            discardPile.splice(obj, 1);
        }
    }
}

function dealCpu1() {
    let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
    for (let i = 0; i < cardImgs.length; i++) { 
        if (drawCardNumber == i) {
            let img = document.createElement('img');
            img.src = cardImgs[i].source;
            img.setAttribute('class', "card cpu-card");
            img.setAttribute('alt', `${cardImgs[i].card}`);
            document.getElementById('cpu1-hand').appendChild(img);
            cpu1Hand.push(cardImgs[i]);
            cardImgs.splice(i,1);
        }
    }
}

function dealPlayer() {
    let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
    for (let i = 0; i < cardImgs.length; i++) { 
        if (drawCardNumber == i) {
            let img = document.createElement('img');
            img.src = cardImgs[i].source;
            img.setAttribute('class', "card");
            img.setAttribute('alt', `${cardImgs[i].card}`)
            document.getElementById('player-hand').appendChild(img);
            playerHand.push(cardImgs[i]);
            cardImgs.splice(i,1);
        }
    }
}

function dealCpu2() {
    let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
    for (let i = 0; i < cardImgs.length; i++) { 
        if (drawCardNumber == i) {
            let img = document.createElement('img');
            img.src = cardImgs[i].source;
            img.setAttribute('class', "card cpu-card");
            img.setAttribute('alt', `${cardImgs[i].card}`);
            document.getElementById('cpu2-hand').appendChild(img);
            cpu2Hand.push(cardImgs[i]);
            cardImgs.splice(i,1);
        }
    }
}

function dealDealerUp() {
    let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
    for (let i = 0; i < cardImgs.length; i++) { 
        if (drawCardNumber == i) {
            let img = document.createElement('img');
            img.src = cardImgs[i].source;
            img.setAttribute('class', "card");
            img.setAttribute('alt', `${cardImgs[i].card}`);
            img.setAttribute('data-type', `${cardImgs[i].points}` );
            document.getElementById('dealer-hand').appendChild(img);
            dealerHand.push(cardImgs[i]);
            cardImgs.splice(i,1);
        }
    }
}

function dealDealerDown() {
    let img = document.createElement('img');
    img.src = "./assets/images/card-back.png"
    img.setAttribute('class', 'card')
    document.getElementById('dealer-hand').appendChild(img);
    let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
    for (let i = 0; i < cardImgs.length; i++) { 
        if (drawCardNumber == i) {
            dealerHand.push(cardImgs[i]);
            cardImgs.splice(i,1);
            cpu1Score = cpu1Hand[0].points + cpu1Hand[1].points;
            playerScore = playerHand[0].points + playerHand[1].points;
            cpu2Score = cpu2Hand[0].points + cpu2Hand[1].points;
            dealerScore = dealerHand[0].points + dealerHand[1].points;
            console.log(cpu1Score);
            console.log(playerScore);
            console.log(cpu2Score);
            console.log(dealerScore);
        }
    }
}

function testForBlackjack() {
}

function revealDealerCard() {
    
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
