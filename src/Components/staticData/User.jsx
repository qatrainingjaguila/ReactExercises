import React from 'react';
import Individual from './Individual';
import People from './People.json';

const User = () => {

 return( 
    <>
    {
        People.map((person) =>
        <Individual key={person.name} name={person.name} city={person.address}/>)
    }
    </>


 );
}
export default User;