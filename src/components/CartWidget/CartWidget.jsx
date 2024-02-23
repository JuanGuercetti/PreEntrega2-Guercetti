import cartImage from './assets/cartImage.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <button className='btn-cart btn btn-success'>
            <img src={cartImage} className='cartImg'/>
            0
        </button>
    )
}

export default CartWidget;