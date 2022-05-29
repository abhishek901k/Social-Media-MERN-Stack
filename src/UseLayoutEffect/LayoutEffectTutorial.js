import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffecLearning() {

    const inputRef = useRef(null); 

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);        
    }, []); 

    return (
        <div>
            <input ref={inputRef} value="PEDRO" />
        </div>
    )
};

export default LayoutEffecLearning;