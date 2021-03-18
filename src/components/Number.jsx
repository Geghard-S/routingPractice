import React from 'react';
import {Link, navigate} from '@reach/router';

const Number = ({id}) => {
    let num = true;
    if(isNaN(id)){
        num = false;
    }

    return(
        <div>
            {
                num ?
                    <h1>The Number is: {id}</h1>:
                    <h1>The Word is: {id}</h1>
            }
        </div>
    )
};
export default Number;