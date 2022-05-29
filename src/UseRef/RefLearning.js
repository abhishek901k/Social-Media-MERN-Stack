import React, { useRef } from "react";

function RefLearning() {

    const inputRef = useRef(null);

    const onClick = () => {
        console.log(inputRef.current.value);
    }

    return (<div>
            <h1>UseRef</h1>
            <input type="text" placeholder="Ex..." ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
        </div>
        )
}

export default RefLearning;