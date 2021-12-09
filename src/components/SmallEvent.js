import React from "react";
import image from "../assets/images/smallEventImage.jpg";
import Button from "react-bootstrap/Button";
import {BigEvent} from "./BigEvent";

class SmallEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {
        return (
            <div className="smallEvent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={image} alt="smallEventImage"></img>
                        </div>
                        <div className="col-md-3">
                            <p></p>
                            <p></p>
                            <p>lavel: </p>
                        </div>
                        <div className="col-md-3">
                            <p></p>
                            <p></p>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <div>
                                    <Button onClick={this._onButtonClick}>Button</Button>
                                    {this.state.showComponent ?
                                        <BigEvent /> :
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default SmallEvent;
