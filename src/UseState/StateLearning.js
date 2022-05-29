import React, {useState} from "react";

const StateLEarning = () => {

    let [counter, setCounter] = useState(0);

    let increment = () => {
        counter = counter +1;
        setCounter(counter);
    }

    return <div>
        {counter}
        <button onClick={increment}>Increment</button>
    </div>
}

export default StateLEarning;