import React, { useState, useRef, useEffect, useCallback } from 'react';

// const Component: React.FC = () => {
//     const count = useRef<number>(-1);
//     count.current += 1;
//
//     return <h2>Component: {count.current}</h2>
// }

const Component: React.FC = React.memo(() => {
    const count = useRef<number>(-1);
    count.current += 1;

    return <h2>Component: {count.current}</h2>
})

const UseCallback: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    // const onClickHandler = () => {
    //     setCount((prevCount) => prevCount + 1);
    // }

    const onClickHandler = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    },[])


    useEffect(() => {
        console.log('onClickHandler update');
    },[onClickHandler])

    return <div>
        <h1>{count}</h1>
        <button onClick={onClickHandler}>Increment</button>

        <Component />
    </div>;
};


export default UseCallback;
