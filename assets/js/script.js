const bubble = document.getElementById('bubble');
const betInput = document.getElementById('bet');
const dealerTalk = document.getElementById('dealer-talk');
const closeBubble = document.getElementById('close-bubble');
const insure = document.getElementById('insure');
const surrender = document.getElementById('surrender');
const winnings = document.getElementById('score');
const playerCommands = document.getElementById('player-commands').children;
const dealerDisplay = document.getElementById('dealer-hand');
const discardedPile = document.getElementById("discard-pile");
const cardImgs = [{source: "./assets/images/2oc-card.png", card: "Two of Clubs", points: 2, face: "two"}, {source: "./assets/images/2od-card.png", card: "Two of Diamonds", points: 2, face: "two"},
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
    {source: "./assets/images/aoc-card.png", card: "Ace of Clubs", points: 11, check: 0}, {source: "./assets/images/aod-card.png", card: "Ace of Diamonds", points: 11, check: 0},
    {source: "./assets/images/aoh-card.png", card: "Ace of Hearts", points: 11, check: 0}, {source: "./assets/images/aos-card.png", card: "Ace of Spades", points: 11, check: 0},]

const discardPile = [];
const playerHand = [];
const cpu1Hand = [];
const cpu2Hand = [];
const dealerHand = [];

let playerScore = 0;
let cpu1Score = 0;
let cpu2Score = 0;
let dealerScore = 0;
let playerBet = 0;
let playerWinnings = 100;

let playerBlackjack = false;
let cpu1Blackjack = false;
let cpu2Blackjack = false;
let dealerBlackjack = false
let bubbleDelay = 2500;

//Gets the bet's input element and adds an event listener to it
//Checks to ensure player's bet is valid and if valid
//will remove player's bet from winnings
setTimeout(function() {
    bubble.style.display = "flex";
}, 1000)
dealerTalk.innerHTML = "Howdy Pardner, siddown and place your bet at the bottom of the table!";
betStage();

function betStage() {
    betInput.addEventListener('keydown', function collectBets(event) {
        if (event.key === "Enter") {
            if (this.valueAsNumber === 0) {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = "You gotta pay to play round 'ere.";
                closeBubble.innerHTML = "OK";
                bubble.children[1].addEventListener('click', function() {
                    bubble.style.display = "none";
                })
            } else if (this.valueAsNumber < 0) {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = "I ain't giving you money.";
                closeBubble.innerHTML = "OK";
                bubble.children[1].addEventListener('click', function() {
                    bubble.style.display = "none";
                })
            } else if (this.valueAsNumber > playerWinnings) {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = "You ain't got that kind of money.";
                closeBubble.innerHTML = "OK";
                bubble.children[1].addEventListener('click', function() {
                    bubble.style.display = "none";
                })
            } else if (this.value === "") {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = "I'm sorry kiddo, we don't accept pretend money here.";
                closeBubble.innerHTML = "OK";
                console.log("Error 3")
                bubble.children[1].addEventListener('click', function() {
                    bubble.style.display = "none";
                })
            } else if (this.value > 0 && this.value <= playerWinnings) {
                bubble.style.display = "none";
                let subtractBet = (this.valueAsNumber);
                playerWinnings = playerWinnings - subtractBet;
                winnings.innerHTML = playerWinnings;
                betInput.setAttribute("max", playerWinnings);
                betInput.removeEventListener('keydown', collectBets);
                betInput.setAttribute("value", 0);
                playerBet = subtractBet;
                bubble.style.display = "none";
                closeBubble.innerHTML = "";
                beginRound();
            }
        }
    })
}

function shuffleCards() {
    setTimeout(function() {
        bubble.style.display = "flex";
        dealerTalk.innerHTML = "I've gotta shuffle the cards real quick";
    }, bubbleDelay)
    setTimeout(function() {
        bubble.style.display = "none";
        dealerTalk.innerHTML = "";
        cpu1Play(); 
    }, bubbleDelay + 2000)
    for (let i = 0; i < discardPile.length; i++) {
        cardImgs.push(discardPile[i]);
        discardPile.splice(i,1);
    }
}

function beginRound() {
    if (cardImgs.length < 8) {
        shuffleCards();
        beginRound();
    } else {
        for (let i = 0; i < 8; i++) {
            if (i === 0 || i === 4) {
                dealCpu1();
            } else if (i === 1 || i === 5) {
                dealPlayer();
            } else if (i === 2 || i === 6) {
                dealCpu2();
            } else if (i === 3) {
                dealDealerUp();
            } else if (i == 7) {
                dealDealerDown();
            }
        }
        testForBlackjack();
    }
}

function dealCpu1() {
    if (cardImgs.length == 0) {
        shuffleCards();
        dealCpu1();
    } else {
        let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
        for (let i = 0; i < cardImgs.length; i++) { 
            if (drawCardNumber == i) {
                let img = document.createElement('img');
                img.src = cardImgs[i].source;
                img.setAttribute('class', "cpu-card");
                img.setAttribute('alt', `${cardImgs[i].card}`);
                document.getElementById('cpu1-hand').appendChild(img);
                cpu1Hand.push(cardImgs[i]);
                img.style.position = 'relative';
                img.style.bottom = `${(7.8 * (cpu1Hand.length - 1))}rem`;
                cardImgs.splice(i,1);
            }
        }
    }
}

function dealPlayer() {
    if (cardImgs.length == 0) {
        shuffleCards();
        dealPlayer();
    } else {
        let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
        for (let i = 0; i < cardImgs.length; i++) { 
            if (drawCardNumber == i) {
                let img = document.createElement('img');
                img.src = cardImgs[i].source;
                img.setAttribute('class', "card");
                img.setAttribute('alt', `${cardImgs[i].card}`)
                document.getElementById('player-hand').appendChild(img);
                playerHand.push(cardImgs[i]);
                img.style.position = 'relative';
                img.style.right = `${(7.8*(playerHand.length - 1))}rem`
                cardImgs.splice(i,1);
            }
        }
    }
}

function dealCpu2() {
    if (cardImgs.length == 0) {
        shuffleCards();
        dealCpu2();
    } else {
        let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
        for (let i = 0; i < cardImgs.length; i++) { 
            if (drawCardNumber == i) {
                let img = document.createElement('img');
                img.src = cardImgs[i].source;
                 img.setAttribute('class', "cpu-card");
                img.setAttribute('alt', `${cardImgs[i].card}`);
                document.getElementById('cpu2-hand').appendChild(img);
                cpu2Hand.push(cardImgs[i]);
                img.style.position = 'relative';
                img.style.bottom = `${(7.8 * (cpu2Hand.length - 1))}rem`;
                cardImgs.splice(i,1);
            }
        }
    }
}

function dealDealerUp() {
    if (cardImgs.length == 0) {
        shuffleCards();
        dealDealerUp();
    } else {
        let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
        for (let i = 0; i < cardImgs.length; i++) { 
            if (drawCardNumber == i) {
                let img = document.createElement('img');
                img.src = cardImgs[i].source;
                img.setAttribute('class', "card");
                img.setAttribute('alt', `${cardImgs[i].card}`);
                img.setAttribute('data-type', `${cardImgs[i].points}` );
                dealerDisplay.appendChild(img);
                dealerHand.push(cardImgs[i]);
                img.style.position = 'relative';
                img.style.right = `${(7.8*(dealerHand.length - 1))}rem`
                cardImgs.splice(i,1);
            }
        }
    }
}

function dealDealerDown() {
    if (cardImgs.length == 0) {
        shuffleCards();
        dealDealerDown
        ();
    } else {
        let img = document.createElement('img');
        img.src = "./assets/images/card-back.png"
        img.setAttribute('class', 'card');
        img.style.position = 'relative';
        img.style.right = "7.8rem"
        dealerDisplay.appendChild(img);
        let drawCardNumber = Math.floor(Math.random() * (cardImgs.length));
        for (let i = 0; i < cardImgs.length; i++) { 
            if (drawCardNumber == i) {
                dealerHand.push(cardImgs[i]);
                cardImgs.splice(i,1);
                cpu1Score = cpu1Hand[0].points + cpu1Hand[1].points;
                playerScore = playerHand[0].points + playerHand[1].points;
                cpu2Score = cpu2Hand[0].points + cpu2Hand[1].points;
                dealerScore = dealerHand[0].points + dealerHand[1].points;
            }
        }
    }
}

function testForBlackjack() {
    if (cpu1Score == 21) {
        setTimeout(function() {
            bubble.style.display = "flex";
            document.getElementById('bubble-content').children[0].innerHTML = "Clint has Blackjack, congratulations!";
        }, bubbleDelay)
        setTimeout(function() {
            bubble.style.display = "none";
        }, (bubbleDelay + 2000));
        bubbleDelay += 2500
    }
    if (playerScore == 21) {
        setTimeout(function() {
            bubble.style.display = "flex";
            document.getElementById('bubble-content').children[0].innerHTML = "You have Blackjack, congratulations!";
        }, bubbleDelay)
        setTimeout(function() {
            bubble.style.display = "none";
        }, (bubbleDelay + 2000));
        bubbleDelay += 2500
    }
    if (cpu2Score == 21) {
        setTimeout(function() {
            bubble.style.display = "flex";
            document.getElementById('bubble-content').children[0].innerHTML = "Mary has Blackjack, congratulations!";
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
        }, (bubbleDelay + 2000));
        bubbleDelay += 2500
    }
    insurancePhase();
}

function insurancePhase() {
    if (dealerHand[0].points >= 10 && playerScore != 21) { 
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = "Would you like to buy insurance, play on, or surrender?";
            insure.innerHTML = "INSURE";
            closeBubble.innerHTML = "PLAY";
            surrender.innerHTML = "SURRENDER";
            closeBubble.addEventListener('click', revealIfBlackjack)
        }, bubbleDelay);
    } else {
        insure.innerHTML = "";
        closeBubble.innerHTML = "";
        surrender.innerHTML = "";
        setTimeout(cpu1Play, 2000); 
    }
    bubbleDelay = 2000;
}

function revealIfBlackjack() {
    closeBubble.removeEventListener('click', revealIfBlackjack)
    if (dealerScore < 21) {
        bubble.style.display = "none";
        dealerTalk.innerHTML = "";
        insure.innerHTML = "";
        closeBubble.innerHTML = "";
        surrender.innerHTML = "";
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = "I ain't got Blackjack";
        }, bubbleDelay)
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            cpu1Play(); 
        }, bubbleDelay + 2000)
    } else if (dealerScore = 21) {
        if (playerScore < 21 || playerScore > 21) {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            insure.innerHTML = "";
            closeBubble.innerHTML = "";
            surrender.innerHTML = "";
            revealDealerCard();
            setTimeout(function() {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = "The house has Blackjack!";
            }, bubbleDelay);
            setTimeout(function() {
                bubble.style.display = "none";
                dealerTalk.innerHTML = "";
                endRound();
            }, bubbleDelay + 2000);
        } else if (playerScore == 21) {
            setTimeout(function() {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = "The house has Blackjack, so you're bet is pushed";
            }, bubbleDelay);
            setTimeout(function() {
                bubble.style.display = "none";
                dealerTalk.innerHTML = "";
                playerWinnings = (playerWinnings + playerBet)
                score.innerHTML = playerWinnings.toFixed(2)
                endRound();
            }, bubbleDelay + 2000);
        }
    }
}

function cpu1Play() {
    if (cpu1Score < 21) {
        let nextMove = shouldHit(cpu1Score);
        if (nextMove === true) {
            setTimeout(function() {
                dealCpu1();
                cpu1Score = cpu1Score + cpu1Hand[cpu1Hand.length -1].points;
                if (cpu1Score > 21) {
                    if (checkAces(cpu1Hand)) {
                        cpu1Score -= 10;
                        setTimeout(cpu1Play, bubbleDelay);
                    } else {
                        setTimeout(function() {
                            bubble.style.display = "flex";
                            dealerTalk.innerHTML = "Clint's gone bust.";
                        }, bubbleDelay);
                        setTimeout(function() {
                            bubble.style.display = "none";
                            dealerTalk.innerHTML = "";
                            playerPlay();
                        }, bubbleDelay + 2000)
                    }
                }
            }, 2000);
            if (cpu1Score <= 16) {
                setTimeout(cpu1Play, bubbleDelay);
            } else if (cpu1Score >= 17 && cpu1Score < 22) {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = `Clint stands on ${cpu1Score}.`;
                console.log("here")
                setTimeout(function() {
                    bubble.style.display = "none";
                    dealerTalk.innerHTML = "";
                    playerPlay();
                }, bubbleDelay);
            }
        } else {
            setTimeout(function() {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = `Clint stands on ${cpu1Score}.`;
            }, bubbleDelay);
            setTimeout(function() {
                bubble.style.display = "none";
                dealerTalk.innerHTML = "";
                playerPlay();
            }, bubbleDelay + 1000);
        }
    } else if (cpu1Score == 21) {
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = `Clint's got 'imself a 21!`;
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            playerPlay();
        }, bubbleDelay + 1000);
    }
}

function playerPlay() {
    if (playerScore < 21) {
        for (let i = 0; i < playerCommands.length; i++) {
            playerCommands[i].style.color = "#ffffff";
            playerCommands[i].style.cursor = "pointer";
        }
        playerCommands[0].addEventListener('click', hit)
        playerCommands[1].addEventListener('click', stand)
    } else if (playerScore == 21) {
        cpu2Play();
    } else if (playerScore > 21) {
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = "You've gone bust.";
            for (let i = 0; i < playerCommands.length; i++) {
                playerCommands[i].style.color  = "#a0a0a0";
                playerCommands[i].style.cursor = "not-allowed";
            }
            playerCommands[0].removeEventListener('click', hit);
            playerCommands[1].removeEventListener('click', stand);
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            cpu2Play();
        }, bubbleDelay + 2000);
    }
}

function cpu2Play() {
    if (cpu2Score < 21) {
        let nextMove = shouldHit(cpu2Score);
        if (nextMove === true) {
            setTimeout(function() {
                dealCpu2();
                cpu2Score = cpu2Score + cpu2Hand[cpu2Hand.length -1].points;
                if (cpu2Score > 21) {
                    if (checkAces(cpu2Hand)) {
                        cpu2Score -= 10;
                        setTimeout(cpu2Play, bubbleDelay);
                    } else {
                        setTimeout(function() {
                            bubble.style.display = "flex";
                            dealerTalk.innerHTML = "Mary's gone bust.";
                        }, bubbleDelay);
                        setTimeout(function() {
                            bubble.style.display = "none";
                            dealerTalk.innerHTML = "";
                            revealDealerCard();
                        }, bubbleDelay + 2000)
                    }
                }
            }, 1000);
            if (cpu2Score <= 16) {
                setTimeout(cpu2Play, bubbleDelay);
            } else if (cpu2Score >= 17 && cpu2Score < 22) {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = `Mary stands on ${cpu2Score}.`;
                setTimeout(function() {
                    bubble.style.display = "none";
                    dealerTalk.innerHTML = "";
                    revealDealerCard();
                }, bubbleDelay);
            }
        } else {
            setTimeout(function() {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = `Mary stands on ${cpu2Score}.`;
            }, bubbleDelay);
            setTimeout(function() {
                bubble.style.display = "none";
                dealerTalk.innerHTML = "";
                revealDealerCard();
            }, bubbleDelay + 1000);
        }
    } else if (cpu2Score == 21) {
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = `Mary's got 'erself a 21!`;
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            revealDealerCard();
        }, bubbleDelay + 1000);
    }
}

function shouldHit(handTotal) {
    const safeTotal = 12;
    const randChance = (Math.random() * 1).toFixed(2);
    const handChance = handTotal < 15 ? (handTotal - 10) /
30 : ((handTotal - 10) / 10) + 0.2;

    if (handTotal < safeTotal) {
        return true;
    } else if (handChance < +randChance && handTotal < 17) {
        return true;
    } else {
        return false;}
}

function revealDealerCard() {
    dealerDisplay.removeChild(dealerDisplay.children[1])
    let img = document.createElement('img');
    img.src = dealerHand[1].source;
    img.setAttribute('class', "card");
    img.setAttribute('alt', `${dealerHand[1].card}`);
    img.setAttribute('data-type', `${dealerHand[1].points}` );
    img.style.position = 'relative';
    img.style.right = "7.8rem";
    dealerDisplay.appendChild(img);
    setTimeout(dealerPlay, bubbleDelay)
}

function dealerPlay() {
    if (dealerScore < 17) {
        setTimeout(function() {
            dealDealerUp();
            dealerScore = dealerScore + dealerHand[dealerHand.length -1].points;
            if (dealerScore > 21) {
                if (checkAces(dealerHand)) {
                    dealerScore -= 10;
                    setTimeout(dealerPlay, bubbleDelay);
                } else {
                    setTimeout(function() {
                        bubble.style.display = "flex";
                        dealerTalk.innerHTML = "I've gone bust.";
                    }, bubbleDelay);
                    setTimeout(function() {
                        bubble.style.display = "none";
                        dealerTalk.innerHTML = "";
                        determineWinner();
                    }, bubbleDelay + 2000)
                }
            } else if (dealerScore <= 21) {
                dealerPlay();
            }
        }, 1000);
    } else if (dealerScore >= 17 && dealerScore < 21) {
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = `I'm standing on ${dealerScore}`;
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            determineWinner();
        }, bubbleDelay + 1000);
    } else if (dealerScore == 21) {
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = `Good ol' 21!`;
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            determineWinner();
        }, bubbleDelay + 1000);
    }
}

function hit() {
    dealPlayer();
    playerCommands[0].removeEventListener('click', hit);
    playerCommands[1].removeEventListener('click', stand);
    for (let i = 0; i < playerCommands.length; i++) {
        playerCommands[i].style.color  = "#a0a0a0";
        playerCommands[i].style.cursor = "not-allowed";
    }
    playerScore = playerScore + playerHand[playerHand.length -1].points;
    setTimeout(function() {
        for (let i = 0; i < playerCommands.length; i++) {
            playerCommands[i].style.color = "#ffffff";
            playerCommands[i].style.cursor = "pointer";
        }
        playerCommands[0].addEventListener('click', hit)
        playerCommands[1].addEventListener('click', stand)}, bubbleDelay)
    if (playerScore > 21) {
        if (checkAces(playerHand)) {
            playerScore -= 10;
            playerPlay();
        } else {
            setTimeout(function() {
                bubble.style.display = "flex";
                dealerTalk.innerHTML = "You've gone bust.";
                playerCommands[0].removeEventListener('click', hit);
                playerCommands[1].removeEventListener('click', stand);
                for (let i = 0; i < playerCommands.length; i++) {
                    playerCommands[i].style.color  = "#a0a0a0";
                    playerCommands[i].style.cursor = "not-allowed";
                }
            }, bubbleDelay);
            setTimeout(function() {
                bubble.style.display = "none";
                dealerTalk.innerHTML = "";
                cpu2Play();
            }, bubbleDelay + 2000)
        }
    }
}

function stand() {
    for (let i = 0; i < playerCommands.length; i++) {
        playerCommands[i].style.color  = "#a0a0a0";
    }
    playerCommands[0].removeEventListener('click', hit);
    playerCommands[1].removeEventListener('click', stand);
    
    bubble.style.display = "flex";
    dealerTalk.innerHTML = `Standing on ${playerScore}.`;
    setTimeout(function() {
        bubble.style.display = "none";
        dealerTalk.innerHTML = "";
        cpu2Play();
    }, bubbleDelay);
}

function checkAces(checkHand) {
    let evalHand = checkHand.filter((hand) => {
        return hand.check == 0;
    })
    if (evalHand.length > 0) {
        evalHand[0].points = 1;
        evalHand[0].check = 1;
        return true;
    } else {
        return false;
    }
}

function determineWinner() {
    if (playerScore === 21 && playerHand.length === 2 && dealerScore != playerScore) {
        setTimeout(function() {
            playerWinnings = (playerWinnings + (1.5 * (playerBet)))
            bubble.style.display = "flex";
            dealerTalk.innerHTML = `You won $${(1.5 * (playerBet)).toFixed(2)}, thanks to yer Blackjack`;
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            winnings.innerHTML = playerWinnings;
            endRound();
        }, bubbleDelay + 1000);
    } else if (dealerScore == playerScore && dealerScore < 22) {
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = `Well, looks like your bets been pushed.`;
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            playerWinnings = playerWinnings + playerBet;
            winnings.innerHTML = playerWinnings;
            endRound();
        }, bubbleDelay + 1000);
    } else if ((dealerScore > playerScore && dealerScore < 22) || (dealerScore < 22 && playerScore >= 22)) {
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = `Better luck next time, Pal.`;
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            endRound();
        }, bubbleDelay + 1000);
    } else if ((playerScore > dealerScore && playerScore < 22) || (playerScore < 22 && dealerScore >= 22)) {
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = `Nicely done, Pardner, you won $${(2 * (playerBet)).toFixed(2)}`;
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            playerWinnings = (playerWinnings + (2 * (playerBet)))
            winnings.innerHTML = playerWinnings
            endRound();
        }, bubbleDelay + 1000);
    } else if (playerScore > 21 && dealerScore > 21) {
        setTimeout(function() {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = `Better luck next time, Pal.`;
        }, bubbleDelay);
        setTimeout(function() {
            bubble.style.display = "none";
            dealerTalk.innerHTML = "";
            endRound();
        }, bubbleDelay + 1000);
    }
}

function endRound() {
    let cpu1 = document.getElementById('cpu1-hand')
    let cpu1Cards = cpu1.children;
    let player = document.getElementById('player-hand')
    let playerCards = player.children;
    let cpu2 = document.getElementById('cpu2-hand')
    let cpu2Cards = cpu2.children;
    let dealer = document.getElementById('dealer-hand')
    let dealerCards = dealer.children;

    for (let i = 0; i < cpu1Cards.length; i++) {
        cpu1Cards[i].setAttribute('class', 'cpu1-disappear');
    }

    for (let i = 0; i < playerCards.length; i++) {
        playerCards[i].setAttribute('class', 'player-disappear');
    }

    for (let i = 0; i < cpu2Cards.length; i++) {
        cpu2Cards[i].setAttribute('class', 'cpu2-disappear');
    }

    for (let i = 0; i < dealerCards.length; i++) {
        dealerCards[i].setAttribute('class', 'dealer-disappear');
    }

    for (let i = 0; i < cpu1Hand.length; i++) {
        discardPile.push(cpu1Hand[i]);
        cpu1Hand.splice(0,1);
    }

    for (let i = 0; i < playerHand.length; i++) {
        discardPile.push(playerHand[i]);
        playerHand.splice(0,1);
    }

    for (let i = 0; i < cpu2Hand.length; i++) {
        discardPile.push(cpu2Hand[i]);
        cpu2Hand.splice(0,1);
    }

    for (let i = 0; i < dealerHand.length; i++) {
        discardPile.push(dealerHand[i]);      
        dealerHand.splice(i,1);
    }

    cpu1Hand.splice(0, cpu1Hand.length)
    cpu2Hand.splice(0, cpu2Hand.length)
    playerHand.splice(0, playerHand.length)
    dealerHand.splice(0, dealerHand.length)

    resetAces(discardPile)
    
    setTimeout(function() {
        cpu1.innerHTML = "";
        player.innerHTML = "";
        cpu2.innerHTML = "";
        dealer.innerHTML = "";
    }, 900);
    
    if (cardImgs.length < 8) {
        for (let i = 0; i < discardPile.length; i++) {
            cardImgs.push(discardPile[i]);
            discardPile.splice(i,1);
        }
    }



    let img = document.createElement('img');
    img.src = "./assets/images/card-back.png"
    img.setAttribute('class', 'card')

    playerScore = 0;
    cpu1Score = 0;
    cpu2Score = 0;
    dealerScore = 0;

    playerBlackjack = false;
    cpu1Blackjack = false;
    cpu2Blackjack = false;
    dealerBlackjack = false
    bubbleDelay = 2500;
    

    setTimeout(function() {
        bubble.style.display = "flex";
        dealerTalk.innerHTML = "Fancy playin' another hand? <br> Make a bet at the bottom left of the table.";
        if (playerWinnings > 0) {
            betStage();
        } else if (playerWinnings == 0) {
            bubble.style.display = "flex";
            dealerTalk.innerHTML = "You're all out of cash.";
            closeBubble.innerHTML = "Click here to buy in again.";
            closeBubble.addEventListener('click', function buyIn() {
                closeBubble.removeEventListener('click', buyIn)
                playerWinnings = 100;
                winnings.innerHTML = playerWinnings
                dealerTalk.innerHTML = "Alright, to begin play, make another bet at the bottom of the table.";
                closeBubble.innerHTML = "";
                betStage();
            })
        }
    })
}  

function resetAces(checkHand) {
    let evalHand = checkHand.filter((hand) => {
        return hand.check == 1;
    })
    if (evalHand.length > 0) {
        for (let i = 0; i < evalHand.length; i++) {
            evalHand[i].points = 11;
            evalHand[i].check = 0;
        }
    } 
}
