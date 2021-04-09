import React from 'react';

const ListElement = ({id, type, editable, text, amount, onEdit, onDelete}) => {

    const handleEdit = () => {
        onEdit(type, id, editable);
    }

    const handleDelete = () => {
        onDelete(type, id);
    }
    
    return ( 
        <div className="listElement">
            <li className="elementName">
                <span contenteditable={editable} className="item">{text}</span>
                <span> - </span>
                <span contenteditable={editable} className="item incomeValue">{amount}</span>
                <span>zł</span>
            </li>
            <div className="buttons">
                <button onClick={handleEdit} className="elementButton">{editable ? 'Zapisz' : 'Edytuj'}</button>
                <button onClick={handleDelete} className="elementButton">Usuń</button>
            </div>
        </div>
     );
}

export default ListElement;