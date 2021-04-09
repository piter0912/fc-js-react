import React from 'react';
import Box from './Box';

const Content = ({onAdd, onEdit, onDelete, onIncomeNameChange, onIncomeAmountChange, onExpenseNameChange, onExpenseAmountChange, incomesList, incomesTotal, expensesList, expensesTotal}) => {
    return ( 
        <div id="content">
            <Box 
                type="income" 
                onAdd={onAdd} 
                onEdit={onEdit} 
                onDelete={onDelete} 
                onNameChange={onIncomeNameChange} 
                onAmountChange={onIncomeAmountChange} 
                list={incomesList} 
                total={incomesTotal}                     
            />
            <Box 
                type="expense" 
                onAdd={onAdd} 
                onEdit={onEdit} 
                onDelete={onDelete} 
                onNameChange={onExpenseNameChange} 
                onAmountChange={onExpenseAmountChange} 
                list={expensesList} 
                total={expensesTotal}                 
            />
        </div>
     );
}
 
export default Content;