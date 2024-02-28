import './Item.css';

const Item = ( { id, name, img, price, description }) => {
    return (
        // <div className='card-container'>
        // Debería configurar otro container para renderizar varias cards adentro
        <div className="card text-bg-success">
            <img src={ img } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> { name } </h5>
                <p className="card-text"> { description } </p>
                <p className="card-text"> { price } </p>
                <a href="#" className="btn btn-outline-light">Comprar</a>
            </div>
        </div>
    )
}

export default Item;