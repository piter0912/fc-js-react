import React from 'react';
import Form from './Form';

const BoxHead = (props) => {

    const {type} = props;

    return ( 
        <div class="elementHead">
            <h2 className="elementHeadTitle">{type==="income" ? 'PRZYCHODY' : 'WYDATKI'}</h2>
            <Form type={type}/>
        </div>
     );
}
 
export default BoxHead;