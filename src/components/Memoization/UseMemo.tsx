import React, { useState, useRef, useCallback, useMemo } from 'react';

interface User {
    user : {
        name: string,
        age: number
    }
}

const Component: React.FC<User> = React.memo(({user}) => {
    const count = useRef<number>(-1);
    count.current += 1;

    return <h2>Component: {count.current}. {user.name} - {user.age}</h2>
})

const UseMemo: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const onClickHandler = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    },[])

    const user = {
        name: 'Andrey',
        age: 18
    };

    // const user = useMemo( () => ({
    //     name: 'Andrey',
    //     age: 18
    // }), [])

    return <div>
        <h1>{count}</h1>
        <button onClick={onClickHandler}>Increment</button>

        <Component user={user} />
    </div>;
};


export default UseMemo;
