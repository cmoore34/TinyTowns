import {Resources} from '../Enums/enums';
import {applyResourceConfig} from '../scripts/resource-config';
import {applyBuildingConfig} from '../scripts/building-config';






class Deck {

    buildings: any;
    deck : Array<string>;
    hand : Array<string>;
    constructor() {
        this.deck = applyResourceConfig();    
        this.buildings = applyBuildingConfig();   
        this.hand = [];             
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
        return this.hand.push(this.deck.pop() || "");
    }

    useResource(cardnum: string) {
        const played = this.hand.findIndex((name) => name === cardnum);
        if(played > -1) {
            this.hand.splice(played, 1)            
            this.refillHand(false);
        }
    }
    refillHand(dealStart : boolean) {
        
        for (var i = 0; i < 3; i++) {
            //var card = $('#card' + i)
            if ((!dealStart && i === 0) || dealStart) {
                this.deal();
            }            
        }
    }
    init() {
        this.refillHand(true);
    }

}

export const desk = new Deck();
