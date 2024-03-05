import CountBtn from '../CountBtn/CountBtn';
import './Item.css';

const Item = ( { id, name, img, price, description, stock }) => {
    return (
        <div className='col-sm-4 mb-3'>
            <div className="card text-bg-success ">
                <img src={ img } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> { name } </h5>
                    <p className="card-text"> { description } </p>
                    <p className="card-text"> { price } </p>
                    <CountBtn title='Cantidad' stock={ stock }/>
                    <a href="#" className="btn btn-outline-light">Comprar</a>
                </div>
            </div>
        </div>
    )
}

export default Item;