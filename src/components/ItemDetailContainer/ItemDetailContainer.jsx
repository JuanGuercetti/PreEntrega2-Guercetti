import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from  'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
        .then(res => {
            setProduct(res)
        })
        .catch(err => {
            console.log('Data loading error: ' + err)
        })
    }, [itemId])

    return (
        <div>
            <h1 className='title-main'>{ greeting }</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;