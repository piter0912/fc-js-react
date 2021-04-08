import React from 'react';

const BoxFooter = (props) => {

    const {type} = props;

    return ( 
        <div className="elementFooter">
            <span className="elementFooter">{type==="income" ? "Suma przychodów:" : "Suma wydatków:"}</span>
            <strong>
                <span id={`${type}_footer_amount`} className="elementFooter"></span>
            </strong>
        </div>
     );
}
 
export default BoxFooter;