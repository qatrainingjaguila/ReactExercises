import React from 'react';
const Individual = (props) => {

    const information = props.info;

    const temparray = []
    for(let[key,value] in Object.defineProperties(information)){
        temparray.push(<li>{key},{value}</li>)
    }

return(  
    <>
    <p key={props.id}>Hello {props.name}, i see {props.city}</p>
    <ol>
        {temparray}
    </ol>

    </>
);
}
export default Individual;