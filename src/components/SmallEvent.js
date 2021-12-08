import React from 'react';
import {listOfEventsData} from "../data"
import './SmallEventStyle.css'
import image from './smallEventImage.jpg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const SmallEvent = () => {
    return (
        <div className='smallEvent'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"><img src={image} alt='smallEventImage'></img></div>
                    <div className="col-md-3"><p></p><p></p><p>lavel: </p></div>
                    <div className="col-md-3"><p></p><p></p></div>
                    <div className="col-md-3">

                        <div>
                            <Button className="btn btn-primary" type="button">Button</Button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SmallEvent;

