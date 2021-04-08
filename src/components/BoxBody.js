import React from 'react';

const BoxBody = (props) => {

    const {type} = props;

    return ( 
        <div className="elementBody">
            <ul id={`${type}_list`}>

            </ul>
        </div>
     );
}
 
export default BoxBody;