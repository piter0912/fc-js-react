import React from 'react';

const Header = ({balance}) => {

    // const title = balance > 0 ? `Możesz jeszcze wydać ${balance} złotych.` : balance === 0 ? 'Bilans wynosi zero' : `Bilans jest ujemny. Jesteś na minusie ${Math.abs(balance)} złotych.`;

    const getTitle = () => {
        const pln = balance === 0 ? '' : ['1'].includes(String(balance).slice(-1)) ? 'złoty' : ['2','3','4'].includes(String(balance).slice(-1)) ? 'złote' : 'złotych';
        const title = balance > 0 ? `Możesz jeszcze wydać ${balance} ${pln}.` : balance === 0 ? 'Bilans wynosi zero' : `Bilans jest ujemny. Jesteś na minusie ${Math.abs(balance)} ${pln}.`;
        return title;
    }

    return ( 
        <div id="header">
            <img id="logo" src="https://d3fldh011ywsk8.cloudfront.net/wp-content/uploads/2017/12/Scholarship.jpg" alt="logo"/>
            <h1 id="header_title">{getTitle()}</h1>
        </div>
     );
}
 
export default Header;
