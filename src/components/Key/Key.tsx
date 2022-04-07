// Пример для видое по ключам - https://www.youtube.com/watch?v=OtAlPwW8DNU
// видео о том, почему нельзя использовать index вместо key


import React, { useState, useEffect , useRef } from 'react';

const initialUsers = [
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

const UserFn: React.FC<{name: string}> = ({name}) => {
    const isMounted = useRef<boolean>(false);

    useEffect(() => {
        console.log('Mount:',name);
    },[])

    useEffect(() => {
        if(!isMounted.current) return;

        console.log('Update:', name);
    },[name])

    useEffect(() => () => {
        console.log('Umount:', name);
    },[])

    useEffect(() => {
        isMounted.current = true;
    },[])

    return <div>{name}</div>;
}


const Key: React.FC = () => {
    const [users, setUsers] = useState(initialUsers)

    const tarasToAndreyHandler = () => {
        setUsers(users.map(user => {
            if(user.id === 2){
                return {
                    ...user,
                    name: 'Andrey'
                }
            }

            return user
        }))
    }

    const vasylKeyChangeHandler = () => {
        setUsers(users.map(user => {
            if(user.id === 3){
                return {
                    ...user,
                    id: 10
                }
            }

            return user
        }))
    }

    const removeTarasHandler = () => {
        setUsers(users.filter(user => user.id !== 2))
    }

    console.log('------');

    return <React.Fragment>
        {users.map((user, index) =><UserFn key={index} name={user.name}  />)}

        <button onClick={tarasToAndreyHandler}>Taras to Andrey</button>
        <button onClick={vasylKeyChangeHandler}>Vasyl key change</button>
        <button onClick={removeTarasHandler}>Remove Tars</button>
    </React.Fragment>;
};

export default Key;
