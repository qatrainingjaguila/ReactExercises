import React from 'react';
import PropTypes from 'prop-types';

const Propchild = (props) => {

return( 
    <>
    <h1>{props.headertext}</h1>
    <h2>The number was {props.number}</h2>
    </>
 );
}
Propchild.defaultProps = {
    headerText: 'This is the default content, if none is supplied'
}

Propchild.propTypes = {
    number: PropTypes.number, //validates type
    headerText: PropTypes.string.isRequired //headerText must exist
    objectProp: PropTypes.shape({
        key1:PropTypes.string,
        key2:PropTypes.number,
        key3:PropTypes.array
    })
}

export default Propchild;