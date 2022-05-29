import React, {useState, createContext} from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextLearning() {
    const [username, setUsername] = useState("");

    return (
        <div>
            <Login setUsername={setUsername}/><User username={username}/>
        </div>
    )
}

export default ContextLearning;