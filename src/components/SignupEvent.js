import React from 'react';
import SmallEvent from "./SmallEvent";

const SignupEvent = () => {
    return (
        <div>
            <div className="d-flex flex-column mb-3">
                <div className="p-2"><SmallEvent/></div>
                <h4> <input type="text" id="fname" name="Имя" placeholder="Ваше имя..."/></h4>
                <h4> <textarea id="telephone" name="telephone" placeholder="Ваш телефон"/></h4>
                <h4> <textarea id="email" name="email" placeholder="Email"/></h4>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Количество (до 10)</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <div className="btn btn-danger col-2 offset-2">
                <p className="m-0">Оплатить </p>

            </div>

        </div>
    );
};

export default SignupEvent;