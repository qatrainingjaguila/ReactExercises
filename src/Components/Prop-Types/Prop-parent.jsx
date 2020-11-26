import React from 'react';
import Propchild from './Prop-child';
const PropParent = () => {   //PropTypes check props match definitions

const someDataObject - {
    key1:'value1',
    key2: 2,
    key3: ['array','here']
}

return( 
    <Propchild
    number = {2}
    headerText = "Suh"
    objectProp={someDataObject}
    />
 );
}
export default PropParent;