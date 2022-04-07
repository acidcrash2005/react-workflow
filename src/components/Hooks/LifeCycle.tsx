import React, { useState, useEffect} from 'react';

const Component: React.FC<{count: number}> = ({count}) => {

    useEffect(() => {
        console.log('First render');
    },[])

    useEffect(() => {
        console.log('Render change props',count);

        return () => {
            console.log('Reset function before!');
        }
    },[count])

    useEffect(() => {
        return () => {
            console.log('Unmount function');
        }
    },[])

    return <div>Component: {count}</div>
}

const State: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [disable, setDisable] = useState<boolean>(true);

    const onClickHandler = () => {
        setCount((prev) => prev + 1);
    }

    const onToggleHandler = () => {
        setDisable((prev) => !prev )
    }

    return <div>
        <h1>{count}</h1>
        <button onClick={onClickHandler}>Increment</button>
        <button onClick={onToggleHandler}>Toggle</button>

        {disable && <Component count={count} />}
    </div>;
};


export default State;
