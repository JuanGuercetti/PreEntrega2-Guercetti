import cartImage from './assets/cartImage.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <button>
            <img src={cartImage} className='cartWidgetImg'/>
        </button>
    )
}

export default CartWidget;