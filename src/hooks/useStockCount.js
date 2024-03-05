import { useState } from "react";

const useStockCount = (initialValue, maxValue) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        count < maxValue && setCount(prev => prev + 1)
    }

    const decrement = () => {
        count !== 0 && setCount(prev => prev - 1)
    }

    return {
        count,
        increment,
        decrement
    }
}

export default useStockCount;