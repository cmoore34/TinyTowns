import React, { useEffect, useState } from "react";
import { Hand } from "./hand.component";
import { PatterList } from "./pattern.list.component";
import { Town } from "./town.component";
import {desk} from "../scripts/deck";
import { TownItem } from "../interfaces/TownItem";
import { buildingConfig } from "../scripts/building-config";
import { Buildings, Resources } from "../Enums/enums";
import { match } from "assert";


interface GameConfig {
  Rows: number, 
}

const gameConfig : GameConfig = {
  Rows: 4,
  
}

desk.init();

export const GameContainer: React.FC = () => {
  
  const [handState, setHandState] = useState(new Array<{key: string, value: boolean}>())
  const [townState, setTownState] = useState(new Array<TownItem>());

  const initHand = () => {
    let initState :{key: string, value: boolean}[] = desk.hand.map((item) => {
      return {key: item, value: false};
    })
    return initState;
  }

  //Cards logic
  const onCardSelectedHandle = (name: string) => {
    const currentHand = handState.slice(); //copy the array
    currentHand.forEach((card) => {
      card.value = false;
    });
    const selectedCard = currentHand.find((card) => {
      return card.key === name;
    });
    selectedCard !== undefined && (selectedCard.value = true);

    setHandState(currentHand);
  }
  useEffect(()=>{   
    setHandState(initHand());
  }, [])
  
  //Town logic
  useEffect(() => {
    let initState : Array<TownItem> = [];
    for(let row = 0 ; row < gameConfig.Rows; row ++){
      for(let col = 0; col < gameConfig.Rows; col ++ ){
        initState.push(
          {
            HightLightClassName: "",
            Buildding: "",
            Selectable: true,
            Resource: "",
            Position : {
              col,row
            }
          })
      }
    }
    setTownState(initState);

  }, []);

  const hightlightBuildings = (townState : TownItem[]) => {
    let currentTownState = townState.slice();
    let filteredResources =  currentTownState.filter((town)=> town.Resource !== "");
    buildingConfig.forEach((config) => { //Iterate over config
      filteredResources.forEach((t) => { //For each town with resource
        var matches = config.match(t, townState);
        if(matches.length > 0){
          matches.forEach((m) => {
            currentTownState.filter((t) => t.Position.row === m.Position.row && t.Position.col === m.Position.col)
              .forEach((r) => r.HightLightClassName = config.className);            
          })          
        }
      })
    });
  setTownState(currentTownState);
  }
  const onTownItemSelectedHandle = (itemSelected : TownItem) => {
    let currentTownState = townState.slice();
    let currentItem = currentTownState.filter((item)=>{return item.Selectable}).find((item) => {
      return item.Position.col === itemSelected.Position.col && item.Position.row === itemSelected.Position.row;
    });
    if(currentItem){
      var handSelected = handState.find((hand) => hand.value)?.key;
      if(handSelected) {
        currentItem.Resource = handSelected || "";
        currentItem.Selectable = handSelected === "" ? true : false;
        desk.useResource(handSelected)  
        setHandState(initHand())
        setTownState(currentTownState);        
        hightlightBuildings(currentTownState); 
    }
    };
  }
  return (
    <div className="gameContainer">
      <Hand cards={handState} onCardSelectedHandle={onCardSelectedHandle} /> 
      <Town items = {townState} onTownItemSelectedHandle={onTownItemSelectedHandle}></Town>
      <PatterList></PatterList>
    </div>
  );
};