import { useEffect } from 'react';
import './Card.css';
import alba from './assets/alba.jpg';

const Card = () => {
    return (
        <div className='card-container'>
            {/* Debería configurar otro container para renderizar varias cards adentro */}
            <div className="card text-bg-success">
                <img src={ alba } className="alba card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-light">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card;