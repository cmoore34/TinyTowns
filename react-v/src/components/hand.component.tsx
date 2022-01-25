import React from "react";
import { Card } from "./Card";


interface HandProps {
  cards : {key: string, value: boolean}[],
  onCardSelectedHandle : (name: string) => void;
}
export const Hand: React.FC<HandProps> = (props) => {
  var {cards, onCardSelectedHandle} = props;
  return (
    <div className="hand">
      {
        cards.map((item, i) => {
          return (<Card key={i} name={item.key} onCardSelectedHandle={onCardSelectedHandle} cardSelected={item.value}></Card>)
        })
      }     
    </div>
  );
};




