import React from 'react';
import Form from './Form';

const BoxHead = ({type, onAdd, onNameChange, onAmountChange}) => {

    return ( 
        <div class="elementHead">
            <h2 className="elementHeadTitle">{type==="income" ? 'PRZYCHODY' : 'WYDATKI'}</h2>
            <Form onAdd={onAdd} type={type} onNameChange={onNameChange} onAmountChange={onAmountChange}/>
        </div>
     );
}
 
export default BoxHead;