import React from 'react';
import Box from './Box';

const Content = () => {
    return ( 
        <div id="content">
            <Box type="income" />
            <Box type="expense" />
        </div>
     );
}
 
export default Content;