import React, { useState } from "react";
import {TownItem} from "../interfaces/TownItem";

interface TownProps{
  items: TownItem[],
  onTownItemSelectedHandle: (item: TownItem) => void;
}
export const Town: React.FC<TownProps> = (props) => {
  const {items, onTownItemSelectedHandle} = props;
  return (    
    <div className="town">
      {
       items.map((item) => {
        const key = `${item.Position.row}${item.Position.col}`
        return <TownSquare key={key} townItem={item} onTownItemSelectedHandle={onTownItemSelectedHandle}></TownSquare>
       })
        
      }
    </div>
  );
};

interface TonwSquareProps {
  townItem : TownItem;
  onTownItemSelectedHandle: (item: TownItem) => void;

}
export const TownSquare : React.FC<TonwSquareProps> = (props) => {   
  const {onTownItemSelectedHandle} = props;
  const [townItem] = useState(props.townItem);

  const className = `cell ${townItem.Resource.toLocaleLowerCase()} ${townItem.HightLightClassName}`
  const onClickHandle = () => {
    onTownItemSelectedHandle(townItem);
  }
  
  return (<div className={className} onClick={onClickHandle} data-resource="" data-building=""></div>)
}
