import React from 'react';
import ChildContact from './ChildContact';

const ContactsStart = () => {

    const Contact1 = {
        image: "https://placedog.net/300/200?id=43",
        name: "Harry Pawter",
        Phone: "(212) 555-1234",
        Email: "harry@pawter.pup"
    };

    const Contact2 = {
        image: "https://placedog.net/400/200?id=5",
        name: "Jimmy Chew",
        Phone: "(212) 555-1234",
        Email: "mr.chew@gmail.pup"
    };

    const ContactArray = [Contact1,Contact2]

    return (

        <>
        <ChildContact
        arrayProp={ContactArray}
        />
        </>


        // <div className="contacts">
        //     <div className="contact-card">
        //         <img src="https://placedog.net/300/200?id=43" />
        //         <h3> Harry Pawter</h3>
        //         <p>Phone: (212) 555-1234</p>
        //         <p>Email: harry@pawter.pup</p>
        //     </div>

        //     <div className="contact-card">
        //         <img src="https://placedog.net/400/200?id=5" />
        //         <h3> Jimmy Chew</h3>
        //         <p>Phone: (212) 555-2345</p>
        //         <p>Email: mr.chew@gmail.pup</p>
        //     </div>

        //     <div className="contact-card">
        //         <img src="https://placedog.net/300/200?id=22" />
        //         <h3> Bark Wahlberg </h3>
        //         <p>Phone: (212) 555-3456</p>
        //         <p>Email: bark@facebook.woof</p>
        //     </div>

        //     <div className="contact-card">
        //         <img src="https://placedog.net/300/240?id=3" />
        //         <h3> Indiana Bones</h3>
        //         <p>Phone: (212) 555-5678</p>
        //         <p>Email: indiana.bones@hotmail.com</p>
        //     </div>
        // </div>
    );
}
export default ContactsStart;