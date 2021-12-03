import React from 'react';
import Search from "./Search";
import SmallEvent from "./SmallEvent";
import Header from "./Header";

const Body = () => {
    return (
        <div className='body'>
            <Header/>
            <div className="d-flex flex-column mb-3">
                <div className="p-2"><SmallEvent/></div>
                <div className="p-2">Flex item 2</div>
                <div className="p-2">Flex item 3</div>
            </div>
        </div>
    )
}
export default Body;