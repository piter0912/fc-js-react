import React from 'react';

const Form = (props) => {

    const {type} = props;

    return ( 
        <div className="elementHeadNew">
            <input 
                type="text" 
                id={`${type}_new_name`}
                className="newName"
                placeholder={type==="income" ? "Nazwa przychodu" : "Nazwa wydatku"}
            />
            <input 
                type="number" 
                id={`${type}_new_amount`}
                placeholder="Kwota"
            />
            <button
                id={`${type}_new_add`}
            >
                Dodaj
            </button>
        </div>
     );
}
 
export default Form;