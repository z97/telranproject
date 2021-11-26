import React from 'react';

const YourGuide = ({name}) => {
  return(
    <div className='yourGuide'>
      <div>
        Your guide:
        <Avatar/>
        {name}
      </div>
    </div>
  )
}

export default YourGuide;