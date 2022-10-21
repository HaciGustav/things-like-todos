import './App.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function App() {
    const [thing, setThing] = useState(['Thing 1', 'Thing 2']);

    const handleAdd = () => {
        const newThing = `thing ${thing.length + 1}`;

        thingsArray.push(newThing);
        setThing((prevState) => [...prevState, newThing]);
        console.log(thingsArray);
    };
    useEffect(() => {}, [thing]);

    const thingsArray = [];

    return (
        <div className="App">
            <Button
                className="mt-5"
                variant="outline-success"
                size="lg"
                onClick={() => handleAdd()}>
                Add Thing
            </Button>
            <div className="d-flex flex-column align-items-center">
                {thing.map((item) => (
                    <p
                        className="mt-3 p-3 border border-success rounded w-50"
                        key={item}>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default App;
