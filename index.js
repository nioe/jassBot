'use strict';

let Bot = require('javascript-jass-bot');

class BotStrategy {
    requestTrumpf(cards) {
        let amountPerColor = {
            HEARTS: 0,
            SPADES: 0,
            CLUBS: 0,
            DIAMONDS: 0
        };

        cards.forEach((card) => {
            amountPerColor[card.color]++;

            switch (card.number) {
                case 9: // Nell
                    amountPerColor[card.color]++;
                    break;
                case 11: // Buur
                    amountPerColor[card.color] += 2;
                    break;
            }
        });

        let max = 0, trumpf;
        for (let color in amountPerColor) {
            if (amountPerColor[color] > max) {
                max = amountPerColor[color];
                trumpf = color;
            }
        }

        console.log('cards', cards);
        console.log('amountPerColor', amountPerColor);
        console.log('trumpf', trumpf);

        let response = {};
        response.mode = 'TRUMPF';
        response.trumpfColor = trumpf;
        return response;
    }

    playCard(myCards, playedCards, gameState) {
        // e.g. play random
        return myCards[Math.floor(Math.random() * myCards.length)];
    }


    gameFinished(data) {
        console.log(data);
    }

    notifyError(error) {
        console.log(error);
    }
}

new Bot(process.argv[2]).withStrategy(new BotStrategy()).connect(process.argv[3] + ':3000');
