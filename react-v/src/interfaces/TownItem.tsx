export interface TownItem {
  Position: { col: number; row: number; };
  Selectable: boolean; //TODO: this should be a method that checks for Resource or Building
  Resource: string;
  Buildding: string;
  HightLightClassName: string;
}
;
