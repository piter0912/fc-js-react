import React from 'react';

const Form = ({type, onAdd, name, amount, onNameChange, onAmountChange}) => {

    const handleAdd = () => {
        onAdd(type);
    }

    return ( 
        <div className="elementHeadNew">
            <input 
                type="text" 
                id={`${type}_new_name`}
                className="newName"
                placeholder={type==="income" ? "Nazwa przychodu" : "Nazwa wydatku"}
                onChange={onNameChange}
                value={name}
            />
            <input 
                type="number" 
                id={`${type}_new_amount`}
                placeholder="Kwota"
                onChange={onAmountChange}
                value={amount}
            />
            <button
                id={`${type}_new_add`}
                onClick={handleAdd}
            >
                Dodaj
            </button>
        </div>
     );
}
 
export default Form;