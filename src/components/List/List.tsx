import React from 'react';

const users = [
    {
        id: 1,
        name: 'Jon'
    },
    {
        id: 2,
        name: 'Taras'
    },
    {
        id: 3,
        name: 'Vasyl'
    },
    {
        id: 4,
        name: 'Horoshiy'
    },
    {
        id: 5,
        name: 'Sergey'
    }
]

const List: React.FC = () => {
    return <ul>
        {
            users.map(
                (user) => <li key={user.id}>{user.name}</li>
            )
        }
    </ul>;
};

export default List;
