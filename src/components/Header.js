import React from 'react';

const Header = ({balance}) => {
    return ( 
        <div id="header">
            <img id="logo" src="https://d3fldh011ywsk8.cloudfront.net/wp-content/uploads/2017/12/Scholarship.jpg" alt="logo"/>
            <h1 id="header_title">Nie dodano jeszcze żadnych przychodów ani wydatków. {balance}</h1>
        </div>
     );
}
 
export default Header;