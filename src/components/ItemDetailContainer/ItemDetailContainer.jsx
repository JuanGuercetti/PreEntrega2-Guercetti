import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from  'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();
    // desestructuro para acceder a la propiedad itemId que está dentro del objeto que devuelve useParamas
    // useParams va a devolver todos los hooks que definí como url dinámicas en los Route de App.jsx

    useEffect(() => {
        getProductById(itemId)
        .then(res => {
            setProduct(res)
        })
        .catch(err => {
            console.log('Data loading error: ' + err)
        })
    }, [itemId])
    // se pone este array de dependencia para que cuando cambie el valor se vuelva a ejecutar el useEffect

    return (
        <div>
            <h1 className='title-main'>{ greeting }</h1>

            <ItemDetail {...product}/>

        </div>
    )
}

export default ItemDetailContainer;