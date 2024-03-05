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
            {/* {props.children}
            React automatiza el meter dentro del objeto props los children */}

            <ItemList products={ products }/>
            {/* <Item 
                id='1'
                name='Producto 1'
                img='...'
                price='1250'
                description='Descripción del producto 1'
            /> */}
        </div>
    )
}

export default ItemListContainer;