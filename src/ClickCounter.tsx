import {useState} from "react";

const ClickCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                {count}
                <button onClick={() => setCount(s => s + 1)}>click</button>
            </div>
        </>
    )
}

export default ClickCounter;
