import './ItemList.css';
import Item from '../Item/Item.jsx';

const ItemList = ( { products }) => {
    return (
        <div className='container item-list'>
            <div className='row'>
                {
                    products?.map((product) => {
                        return <Item key={product.id} {...product}/>
                    })
                }
            </div>
        </div>
    )
}

export default ItemList;