import { useState } from "react";
import './CountBtn.css';

const CountBtn = ({ title, stock }) => {

    const [cant, setCant] = useState(0);

    const add = () => {
        cant < stock ? setCant(prev => prev + 1) : console.log("No hay más")
    };

    const subtract = () => {
        cant > 0 ? setCant(prev => prev - 1) : console.log("no puede ser menor a 0")
    };

    return (
        <div className="btn-container">
            <div className="row">
                <label className="card-text">{ title }</label>
            </div>
            <div className="btn-container-child">
                <button onClick={ add } className="btn btn-outline-light">+</button>
                <h6>{ cant }</h6>
                <button onClick={ subtract } className="btn btn-outline-light">-</button>
            </div>         
        </div>
    )
}

export default CountBtn;