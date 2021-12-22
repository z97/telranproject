import React, {useState} from 'react';
import SmallEvent from "./SmallEvent";
import Header from "./Header";
import json from "../assets/json/package.json"

const Body = () => {
    const [smallEvent, setSmallEvent] = useState([
        {json}
    ])
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