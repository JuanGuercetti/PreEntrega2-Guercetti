import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then(res => {
            setProducts(res);
        })
        .catch(err => {
            console.log('Data loading error :' + error);
        })
    })

    return (
        <div>
            <h1 className='title-main'>{ greeting }</h1>

            <ItemList products={ products }/>
        </div>
    )
}

export default ItemListContainer;