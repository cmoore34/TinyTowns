import React from "react";

interface CardProps{
    name: string;
    onCardSelectedHandle : (name: string) => void;
    cardSelected : boolean;
  }
  
export const Card: React.FC<CardProps> = (props) => {
  const { name, onCardSelectedHandle, cardSelected } = props;
 
  const cssClass = (): string => {
    return `card  ${cardSelected ? "selected" : name.toLocaleLowerCase()}`;
  }

  const onClickHandle = () => {
    onCardSelectedHandle(name);
  }
 
  return (<div onClick={onClickHandle} className={cssClass()} data-resource="">{name}</div>);
};
