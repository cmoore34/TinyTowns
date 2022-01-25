import React from "react";



export const PatterList: React.FC = () => {
  return (
    <div className='patternList'>
      <div className='patternCard'><div className='buildingName'>Cottage</div><img className='buildingSVG' src='SVG/Buildings/Cottage.svg' /><div className='patternIMG'></div><div className='scoring'></div></div>
      <div className='patternCard'><div className='buildingName'>Chapel</div><img className='buildingSVG' src='SVG/Buildings/Chapel.svg' /><div className='patternIMG'></div><div className='scoring'></div></div>
      <div className='patternCard'><div className='buildingName'>Well</div><img className='buildingSVG' src='SVG/Buildings/Well.svg' /><div className='patternIMG'></div><div className='scoring'></div></div>
      <div className='patternCard'><div className='buildingName'>Farm</div><img className='buildingSVG' src='SVG/Buildings/Farm.svg' /><div className='patternIMG'></div><div className='scoring'></div></div>
      <div className='patternCard'><div className='buildingName'>Tavern</div><img className='buildingSVG' src='SVG/Buildings/Tavern.svg' /><div className='patternIMG'></div><div className='scoring'></div></div>
      <div className='patternCard'><div className='buildingName'>Theater</div><img className='buildingSVG' src='SVG/Buildings/Theater.svg' /><div className='patternIMG'></div><div className='scoring'></div></div>
      <div className='patternCard'><div className='buildingName'>Factory</div><img className='buildingSVG' src='SVG/Buildings/Factory.svg' /><div className='patternIMG'></div><div className='scoring'></div></div>
    </div>
  );
};
