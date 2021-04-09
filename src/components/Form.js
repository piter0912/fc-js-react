import React from 'react';

const Form = ({type, onAdd, onNameChange, onAmountChange}) => {

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
            />
            <input 
                type="number" 
                id={`${type}_new_amount`}
                placeholder="Kwota"
                onChange={onAmountChange}
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