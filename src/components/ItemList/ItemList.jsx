import './ItemList.css';
import Item from '../Item/Item.jsx';

const ItemList = ( { products }) => {
    return (
        <div className='card-container'>
            {
                products?.map((product) => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ItemList;