import React, { useState } from "react";
import Instagram from "../assets/owner/instagram.png";
import Twitter from "../assets/owner/twitter.png";
import More from "../assets/owner/more.png";
import "./Banner.css";
import { useEffect } from "react";
const Banner = ({ selectedChip, chipListData }) => {
 const [activeChip, setActiveChip] = useState(chipListData[0]);
 console.log(activeChip);
 useEffect(() => {
  setActiveChip(chipListData[selectedChip]);
 }, [chipListData, selectedChip]);

 return (
  <div className='main'>
   <div className='mainContent'>
    <div className='chipHighlight'>
     <div className='chipContainer'>
      <img className='selectedChip' src={activeChip.image_original_url} />
     </div>
    </div>

    <div className='chipDetails' style={{ color: "#fff" }}>
     <div className='title'>
      {activeChip.name}
      <span className='itemNumber'> .#{activeChip.token_id}</span>
     </div>

     

     <div className='owner'>
      <div className='ownerImageContainer'>
       <img
        className='profile'
        //    src='https://media-exp1.licdn.com/dms/image/C4D03AQE6iGob09U6Vg/profile-displayphoto-shrink_200_200/0/1645809232585?e=1658361600&v=beta&t=6Lz9mnqdv2hImVM_zA6O1-hkyvN6SzDhkvGCqh0YxPA'
        src={activeChip.owner.profile_img_url}
        alt='profile Image'
       />
      </div>
      <div className='ownerDetails'>
       <div className='ownerNameAndHandle'>
        <div className='ownerAddress'>{activeChip.creator.address}</div>
        <div className='ownerHandle'>@chiragJorasia</div>
       </div>

       <div className='ownerLink'>
        <img src={Instagram} alt='' />
       </div>
       <div className='ownerLink'>
        <img src={Twitter} alt='' />
       </div>
       <div className='ownerLink'>
        <img src={More} alt='' />
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Banner;
