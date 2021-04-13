import React, {useState, useEffect} from 'react';
import {checkInputs} from './App';

const ListElement = ({id, type, text, amount, onEdit, onDelete, isInEdit}) => {

    const [inputText, setInputText] = useState('');
    const [inputAmoun, setInputAmount] = useState(0);

    useEffect(() => {
        setInputText(text);
        setInputAmount(amount);    
    },[]);
    
    const handleEdit = () => { 
        if(checkInputs(type, inputText, inputAmoun)) {
            onEdit(type, id, inputText, inputAmoun);
        }
    }

    const handleDelete = () => {
        onDelete(type, id);
    }

    const handleTextChange = (e) => {
        setInputText(e.target.value);
    } 

    const handleAmountChange = (e) => {
        setInputAmount(Number(e.target.value));
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleEdit();
        } 
    }

    const style = isInEdit ? {border: '3px solid lightblue'} : {border: 0};
    
    return ( 
        <div style={style}>
        <div className="listElement">
            <li className="elementName">
                <input 
                    className="item" 
                    type="text" 
                    size="20"
                    value={inputText} 
                    onChange={handleTextChange} 
                    readOnly={!isInEdit}
                    onKeyPress={handleKeyPress}
                />
                <span> - </span>
                <input 
                    className="item incomeValue" 
                    type="number" 
                    value={inputAmoun} 
                    onChange={handleAmountChange} 
                    readOnly={!isInEdit}
                    onKeyPress={handleKeyPress}
                />
                <span>zł</span>
            </li>
            <div className="buttons">
                <button onClick={handleEdit} className="elementButton">{isInEdit ? 'Zapisz' : 'Edytuj'}</button>
                {!isInEdit && <button onClick={handleDelete} className="elementButton">Usuń</button>}
            </div>
        </div>
        </div>
     );
}

export default ListElement;