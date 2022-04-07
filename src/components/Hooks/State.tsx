import React, { useState } from 'react';


const State: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const onClickHandler = () => {
        const newCount = count + 1;
        setCount(newCount);

        // setCount((prev) => prev + 1);
    }

    return <div>
        <h1>{count}</h1>
        <button onClick={onClickHandler}>Increment</button>
    </div>;
};

// const user = {
//     age: 12
// }
//
// const initialState = () => {
//     if(user.age >= 18) {
//         return 1
//     }
//
//     return 0
// }

export default State;
