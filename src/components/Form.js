import React from 'react';

const Form = ({type, onAdd, isInEdit, name, amount, onNameChange, onAmountChange}) => {

    const handleAdd = () => {
        onAdd(type);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onAdd(type);
        } 
    }

    return ( 
        <div className="elementHeadNew">
            <input 
                type="text" 
                id={`${type}_new_name`}
                className="newName"
                placeholder={type==="income" ? "Nazwa przychodu" : "Nazwa wydatku"}
                onChange={onNameChange}
                onKeyPress={handleKeyPress}
                value={name}
                readOnly={isInEdit}
            />
            <input 
                type="number" 
                id={`${type}_new_amount`}
                placeholder="Kwota"
                onChange={onAmountChange}
                onKeyPress={handleKeyPress}
                value={amount}
                readOnly={isInEdit}
            />
            <button
                id={`${type}_new_add`}
                onClick={handleAdd}
                disabled={isInEdit}
            >
                Dodaj
            </button>
        </div>
     );
}
 
export default Form;