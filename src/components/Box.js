import React from 'react';
import BoxList from './BoxList';
import BoxFooter from './BoxFooter';
import BoxHead from './BoxHead';

const Box = ({type, onAdd, onEdit, onDelete, onNameChange, onAmountChange, list, total}) => {

    return ( 
        <div className="main">
            <BoxHead type={type} onAdd={onAdd} onNameChange={onNameChange} onAmountChange={onAmountChange}/>
            <BoxList type={type} list={list} onEdit={onEdit} onDelete={onDelete}/>
            <BoxFooter type={type} total={total}/>
        </div>
     );
}
 
export default Box;