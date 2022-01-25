import { Resources, Next } from "../Enums/enums";
import { TownItem } from "../interfaces/TownItem";

export const FindAny = (currentPosition: any, board: TownItem[], resource : Resources) => {
  
    var moveNext = true;
    var next : Next = Next.Right;
    var {col, row} = currentPosition;
    //Always start by the top righ corner
  
    col += 1; 
    var itemFound : TownItem | undefined = undefined;
    do {
       itemFound = board
       .filter((item) => item.Resource === Resources[resource])
       .find((item) => {return item.Position.col === col && item.Position.row === row});
       if(!itemFound) {
            //If I'm in the next col, go up
            if(col > currentPosition.col){
                row -= 1; //Move to the next row
                col = currentPosition.col;
                next = Next.Up;
            }
            //If I'm in the top, go down
            else if(row < currentPosition.row){
                row = currentPosition.row + 1;
                next = Next.Down;
            }
            //If I'm bellow, go left
            else if(row > currentPosition.row){
                row = currentPosition.row;
                col = currentPosition.col -1;
                next = Next.Left;
            }
            else{
                moveNext = false;
            }
    }
    }while (!itemFound && moveNext)
    return {itemFound, next};
   }
   
   export const FindNextInRow =  (currentPosition: any, board: TownItem[], resource : Resources) => {
       var {col, row} = currentPosition;
       //Find right
       var itemFound =FindRight(currentPosition, board, resource);
       
       //Find Left
       if(!itemFound){
          return FindLeft(currentPosition, board, resource);
       }
       return itemFound;
   }
   export const FindNextInColumn =  (currentPosition: any, board: TownItem[], resource : Resources) => {
       var itemFound = FindUp(currentPosition, board, resource);    
      if(!itemFound){
         return FindBottom(currentPosition, board, resource);
      }
      return itemFound;
   }
   
  export const FindUp = (currentPosition: any, board: TownItem[], resource : Resources ) => {
       var {col, row} = currentPosition;
   
      return board
      .filter((item) => item.Resource === Resources[resource])
      .find((item) => {return item.Position.col === col  && item.Position.row  === row +1 });
   }
   
  export const FindBottom = (currentPosition: any, board: TownItem[], resource : Resources ) => {
       var {col, row} = currentPosition;
   
      return board
      .filter((item) => item.Resource === Resources[resource])
      .find((item) => {return item.Position.col === col  && item.Position.row  === row -1});
   }
   
  export const FindRight = (currentPosition: any, board: TownItem[], resource : Resources ) => {
       var {col, row} = currentPosition;    
       return board
       .filter((item) => item.Resource === Resources[resource])
       .find((item) => {return item.Position.col === col +1 && item.Position.row  === row });
   }
  export const FindLeft = (currentPosition: any, board: TownItem[], resource : Resources ) => {
       var {col, row} = currentPosition;    
       return board
       .filter((item) => item.Resource === Resources[resource])
       .find((item) => {return item.Position.col === col -1 && item.Position.row  === row });
   }