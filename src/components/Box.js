import React from 'react';
import BoxBody from './BoxBody';
import BoxFooter from './BoxFooter';
import BoxHead from './BoxHead';

const Box = (props) => {

    const {type} = props;

    return ( 
        <div className="main">
            <BoxHead type={type} />
            <BoxBody type={type} />
            <BoxFooter type={type} />
        </div>
     );
}
 
export default Box;