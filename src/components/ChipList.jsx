import React from "react";
import CollectionCard from "./CollectionCard";
import "./ChipList.css";

const ChipList = ({ chipListData, setSelectedChip }) => {
 return (
  <div className='chipList'>
   {chipListData.map((chip) => (
    <div onClick={() => setSelectedChip(chip.token_id)}>
     <CollectionCard
      key={chip.token_id}
      id={chip.token_id}
      name={chip.name}
      traits={chip.traits}
      image={chip.image_original_url}
     />
    </div>
   ))}
  </div>
 );
};

export default ChipList;
