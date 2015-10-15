'use strict';
 
let Bot = require('javascript-jass-bot');
 
class BotStrategy {
    requestTrumpf(cards) {
        // e.g. choose TRUMPF SPADES
        let response = {};
        response.mode = 'TRUMPF';
        response.trumpfColor = 'SPADES';
        return response;
    }
    
    playCard(myCards, playedCards, gameState) {
        // e.g. play random
        return myCards[Math.floor(Math.random()*myCards.length)];
    }
    
    
    gameFinished(data) {
        console.log(data);
    }
 
    notifyError(error) {
        console.log(error);
    }
}
 
new Bot('ChuckNorris').withStrategy(new BotStrategy()).connect('localhost:3000');