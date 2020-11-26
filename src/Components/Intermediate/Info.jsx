import React from 'react';
import ComponentWithProps from './ComponentWithProps';
const Info = () => {
    const someValue = 10;
    const date = new Date(Date.now())
    const someDataObject = {
        author: 'Carlos',
        title: "Can't log in",
        time: date.toString()
    };

    const someDataArray = [0,1,2,3,4,5];

    const someFunction = () => ('A string from a function');

    return(
        <>
            <ComponentWithProps    //calling the Component with Props component with these objs
            valueProp={someValue}
            objectProp={someDataObject}
            arrayProp={someDataArray}
            functionProp={someFunction}
            headerText="Ticket System"
            numericProp={100}
            />
        </>
    );
}
export default Info;