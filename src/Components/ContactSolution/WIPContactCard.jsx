import React from 'react';


const ContactCardWIP = (props) => {

return( 
    <div classNamee="contact-card">
    <img src={props.imgUrl} alt="Dog"/>
    <h3>{props.name}</h3>
    <p>{props.phone}</p>
    <p>{props.email}</p>
</div>

 );


}
export default ContactCardWIP;