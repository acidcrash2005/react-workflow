/*
Перерисовка компонента происходит если:

- Рендер родительского компонента
- Изменение состояния компонента/хука
- Изменения пропсов
*/

import React, { useState, useRef } from 'react'

const Component: React.FC = () => {
    const count = useRef<number>(-1);
    count.current += 1;

    return <h2>Component: {count.current}</h2>
}

const Render: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const onClickHandler = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return <div>
        <h1>{count}</h1>
        <button onClick={onClickHandler}>Increment</button>

        <Component />
    </div>;
};


export default Render;
