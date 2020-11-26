import React from 'react';
import ChildItem from './ChildItem';

const ListItems = () => {

const itemArray = ['Work','work','work','work','work']

return( <>

    <ChildItem
    itemList={itemArray}
    />

</>
 );
}
export default ListItems;