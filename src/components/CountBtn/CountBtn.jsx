import './CountBtn.css';
import useStockCount from "../../hooks/useStockCount";

const CountBtn = ({ title, stock }) => {

    const { count, increment, decrement } = useStockCount(0, stock);

    return (
        <div className="btn-container">
            <div className="row">
                <label className="card-text">{ title }</label>
            </div>
            <div className="btn-container-child">
                <button onClick={ increment } className="btn btn-outline-light">+</button>
                <h6>{ count }</h6>
                <button onClick={ decrement } className="btn btn-outline-light">-</button>
            </div>         
        </div>
    )
}

export default CountBtn;