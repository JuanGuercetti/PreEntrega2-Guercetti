import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting, itemId }) => {
    const [product, setProduct] = useState(null);

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