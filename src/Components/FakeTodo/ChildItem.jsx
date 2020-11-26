import React from 'react';


const ChildItem = (itemListProp) => {

const {itemList} = itemListProp;

let i=0;

const items = itemList.map(seq => {
return(
<>
<input type="checkbox" value="Start"></input>
<label>{seq}</label>
<br></br>
</>
)})

return( 
    <>
        {items}
    </>
 );
}


export default ChildItem;