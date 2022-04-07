import React, { useState, useEffect} from 'react';


const UseEffect: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false)
        },3000)
    },[])

    return <div>
        <h1>UseEffect</h1>
        {isVisible && <h2>Visible content</h2>}
    </div>;
};


export default UseEffect;
