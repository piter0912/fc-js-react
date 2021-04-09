import React from 'react';
import ListElement from './ListElement';

const BoxBody = ({type, list, onEdit, onDelete}) => {

    return ( 
        <div className="elementBody">
            <ul id={`${type}_list`}>
                {list.map(el => <ListElement id={el.id} type={type} editable={el.editable} text={el.text} amount={el.amount} onEdit={onEdit} onDelete={onDelete}/>)}
            </ul>
        </div>
     );
}
 
export default BoxBody;