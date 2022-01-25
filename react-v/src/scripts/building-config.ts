import { Buildings, Resources, Direction } from "../Enums/enums";
import { TownItem } from "../interfaces/TownItem";
import {FindBuilding} from '../scripts/finder';



export interface BuildingConfigInterface {   
    name: Buildings,
    match: (currentItem: TownItem, board: TownItem[]) => TownItem[],
    className: string,
}
export const buildingConfig :BuildingConfigInterface[] = [
    {       
      name: Buildings.Cottage,
      className: 'cottageFound',
      match: (currentItem: TownItem, board: TownItem[]) => {
        return FindBuilding([
          {resource: Resources.Wheat, direction: Direction.None},
          {resource: Resources.Glass, direction: Direction.Any},
          {resource: Resources.Brick, direction: Direction.Change}
        ], currentItem, board);              
      }      
    }, 
    {       
      name: Buildings.Chapel,
      className: 'chapelFound',
      match: (currentItem: TownItem, board: TownItem[]) => {
        return FindBuilding([
          {resource: Resources.Stone, direction: Direction.None},
          {resource: Resources.Glass, direction: Direction.Any},
          {resource: Resources.Stone, direction: Direction.Same},
          {resource: Resources.Glass, direction: Direction.Change}
        ], currentItem, board);              
      }
    },
    {       
      name: Buildings.Tavern,
      className: 'tavernFound',
      match: (currentItem: TownItem, board: TownItem[]) => {
        return FindBuilding([
          {resource: Resources.Brick, direction: Direction.None}, 
          {resource: Resources.Brick, direction: Direction.Any},    
          {resource: Resources.Glass, direction: Direction.Same},            
        ], currentItem, board);              
      }            
    }, 
];


export const applyBuildingConfig = () => {

}