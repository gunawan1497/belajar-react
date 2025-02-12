import { useCallback, useState } from "react";
import Search from "./Search";

const dataUsers = ['hello', 'world', 'foo', 'bar'];

const ExampleUseCallback = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(dataUsers);

    const handleIcrement = () => {
        setCount((count) => count + 1);
    };

    const shuffle = (array) => {
        return [...array].sort(() => 0.5 - Math.random());
    };

    const handleSearch = useCallback((text) => {
        // console.log(users[0]);
        // console.log(text);
        const filteredUsers = users.filter((user) => {
            return user.toLowerCase().includes(text)
        });
        setUsers(filteredUsers);        
    }, [users],
);

    return (
        <div>
            <div>
                <h4>Count :{count}</h4>
                {/* <button onClick={() => setCount((count) => count + 1)}>Increment</button> */}
                <button onClick={handleIcrement}>Increment</button>
            </div>
            <hr />
            <div>
                <Search onChange={handleSearch} />
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
                <button onClick={() => setUsers(shuffle(dataUsers))}>Shuffle</button>
            </div>
        </div>
    );
};

export default ExampleUseCallback;