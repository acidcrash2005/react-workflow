import React from 'react';

interface Props {
    text: string
}

const Component:React.FC<{name:string}> = ({ name  }) => {
    return React.createElement("h1", null, name);
};

const NoJsx: React.FC<Props> = ({text}) => {
    return React.createElement(React.Fragment,null,
        React.createElement(Component, {name:text})
    )
};


export default NoJsx;
