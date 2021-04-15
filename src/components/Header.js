import React from 'react';

const Header = ({balance}) => {

    const slownie = (amount) => {
        const lastDigit = Number(String(amount).slice(-1));
        const lastTwoDigits = Number(String(amount).slice(-2));
        if([0,1,5,6,7,8,9].includes(lastDigit) || ( 10<=lastTwoDigits && lastTwoDigits<=21) ) {
            return 'złoty';
        } else {
            return 'złote';
        }
    }

    const getTitle = () => {
        const pln = slownie(balance);
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
