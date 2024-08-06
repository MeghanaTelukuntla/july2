import { useState } from "react";

const UseStateSquare = () => {
    const [square, setSquare] = useState([
        <div key={1} style={{ height: '40px', width: '40px', border: '1px solid black', backgroundColor:'grey',  }}></div>
    ]);

    const squareHandler = () => {
        const newSquare = (
            <div key={square.length + 1} style={{ height: '40px', width: '40px', border: '1px solid black', backgroundColor:'grey', }}></div>
        );
        setSquare([...square, newSquare]);
    }

    return (
        <>
            <button onClick={squareHandler}>Click Me</button>
            {
                square.map((eachsquare, index) => {
                    return (
                        <div key={index}>
                            {eachsquare}
                        </div>
                    );
                })
            }
        </>
    );
}

export default UseStateSquare;
