import { useState } from "react"

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] =  useState(inital);

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }

    return (
        <article>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </article>
    
        // <article className="btn-container">
        //     <div className="row">
        //         <label className="card-text">{ title }</label>
        //     </div>
        //     <div className="btn-container-child">
        //         <button onClick={ increment } className="btn btn-outline-light">+</button>
        //         <h6>{ count }</h6>
        //         <button onClick={ decrement } className="btn btn-outline-light">-</button>
        //         <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        //     </div>         
        // </article>
    )
}

export default ItemCount;