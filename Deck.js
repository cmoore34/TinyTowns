class Deck {
    constructor() {
        this.deck = ["Wheat", "Wood", "Brick", "Stone", "Glass", "Wheat", "Wood", "Brick", "Stone", "Glass", "Wheat", "Wood", "Brick", "Stone", "Glass"];
        this.hand = [];
        this.played = "";
        this.shuffle();
    }

    shuffle() {
        const { deck } = this;
        let m = deck.length,
            i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
        return this;
    }

    deal() {
        return this.hand.push(this.deck.pop());
    }

    play(cardnum) {
        this.played = this.hand.splice(cardnum, 1).toString()
        this.deck.unshift(this.played);
    }
}
const game = new Deck();
$(document).ready(function() {
    refillHand(true);
    console.log(game.deck);
    console.log(game.hand);
});

function refillHand(dealStart) {
    for (i = 0; i < 3; i++) {
        var card = $('#card' + i)
        if ((!dealStart && i === 0) || dealStart) {
            game.deal();
        }
        var handVal = game.hand[i].toString();
        card.addClass(handVal.toLowerCase());
        card.text(handVal);
        card.data("resource", handVal.toLowerCase());
    }
}