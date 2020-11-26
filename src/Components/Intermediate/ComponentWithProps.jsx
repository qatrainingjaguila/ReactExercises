import React from 'react';

const ComponentWithProps = (props) => { //takes in argument as props

const {valueProp, objectProp, arrayProp, functionProp, headerText,numericProp} = props;

const objectPropsDisplay = [];

const number = arrayProp.map(seq => <li>Number is {seq}</li>)

for (let [k,v] of Object.entries(objectProp)){
    objectPropsDisplay.push(<p key={k}>{k}: {v}</p>);
}

return( 
    <>
    <p>{headerText}</p>
    <p>{objectPropsDisplay}</p>
    <ol>
        {number}
    </ol>
    <p> FunctionProp returns: {functionProp()}</p>
    </>
 );
}
export default ComponentWithProps;