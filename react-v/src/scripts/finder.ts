import { Next, Resources, Direction } from "../Enums/enums";
import { TownItem } from "../interfaces/TownItem";
import { FindAny, FindNextInColumn, FindNextInRow } from "./find-helper";

export const FindBuilding = (rule : {resource: Resources, direction: Direction}[], currentItem: TownItem, board: TownItem[]) => {

    if(rule.length === 0) {
        throw `Not rules for found`;
    }
    
    if(currentItem.Resource !== Resources[rule[0].resource])
        return [];

    var pattern : TownItem[] = [currentItem];
    var currentPosition = currentItem.Position; 
    var nextPosition = null;
    var found;
    var itemFound;
    var index = 1;
    do {
        var currentRule = rule[index];
        found = false;

        switch (currentRule.direction){
            case Direction.Any:
                var result = FindAny(currentPosition, board, currentRule.resource);
                if(result.itemFound){
                    found = true;
                    pattern.push(result.itemFound);
                    currentPosition = result.itemFound.Position;
                    nextPosition = result.next;
                }
                break;
            case Direction.Same:
                if(nextPosition === Next.Up || nextPosition === Next.Down) {
                    let itemFound = FindNextInColumn(currentPosition, board, currentRule.resource);
                    if(itemFound){
                        found = true;
                        pattern.push(itemFound);
                        currentPosition = itemFound.Position;                        
                    }
                }            
                else if(nextPosition === Next.Left || nextPosition === Next.Right){
                    let itemFound = FindNextInRow(currentPosition, board, currentRule.resource);
                    if(itemFound){
                        found = true;
                        pattern.push(itemFound);
                        currentPosition = itemFound.Position;                       
                    }          
                }
                break;
            case Direction.Change:
                if(nextPosition === Next.Up || nextPosition === Next.Down) {
                    itemFound = FindNextInRow(currentPosition, board, currentRule.resource);
                    if(itemFound){
                        found = true;
                        pattern.push(itemFound);
                        currentPosition = itemFound.Position;                        
                    }
                }            
                else if(nextPosition === Next.Left || nextPosition === Next.Right){
                    itemFound = FindNextInColumn(currentPosition, board, currentRule.resource);
                    if(itemFound){
                        found = true;
                        pattern.push(itemFound);
                        currentPosition = itemFound.Position;                       
                    }          
                }               
                break;
            
        }
        index++;
    }while(found && index < rule.length)
    return pattern.length === rule.length ? pattern : [];
}