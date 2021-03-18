import React from 'react';
    
    const Hello = ({word, txtcolor, bgcolor}) => {
        const style ={
            backgroundColor : bgcolor,
            color: txtcolor
        }

    return (
        <div>
            <h1 style={style}>{word}</h1>
        </div>
    )

}

export default Hello;