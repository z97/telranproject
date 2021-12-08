import React from 'react';
import{listOfEventsData} from "../data"
import styles from './SmallEventStyle.css'
const SmallEvent = () => {
    return (
        <div className='smallEvent'>

                <img
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                    </p>
                    <a href="#!" className="btn btn-primary">Button</a>
                </div>
                <div className="json-container">
                    {listOfEventsData.map((data, key) => {
                        return (
                            <div key={key}>
                                {data.date +
                                " , " +
                                data.time +
                                " ," +
                                data.fullDescription +
                                ", " +
                                data.shortDescription}
                            </div>
                        );
                    })}
                </div>

        </div>
    )
}

export default SmallEvent;