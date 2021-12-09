import React from 'react';
import {SmallGallery} from "./SmallGallery";
export const BigEvent = () => {
  return(
      <div className='bigEvent'>
          <SmallGallery/>
          <button type="button" className="btn btn-primary">I will go</button>
      </div>
  )
}