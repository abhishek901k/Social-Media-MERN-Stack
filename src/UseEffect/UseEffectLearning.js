import react, {useEffect}  from "react";
import axios  from "axios";
import { useState } from "react/cjs/react.development";

function UseEffectLearning() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
                console.log("API was called");
            })
    }, []);

    return (
        <div>
            Hello World {data}
        </div>
    )
}

export default UseEffectLearning;