import React, {useState} from 'react';
import Header from './Header';
import Content from './Content';
import '../styles/content.css';
import '../styles/header.css';

function App() {

  const [incomesList, setIncomesList] = useState([{id: 1, editable: false, text: 'test', amount: 1500}]);
  const [expensesList, setExpensesList] = useState([]);
  const [incomesTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [balance, setBalance] = useState(0);
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);

  const handleAdd = (type) => {
    const name = type==="income" ? incomeName : expenseName;
    const amount = type==="income" ? incomeAmount : expenseAmount;
    console.log(name, amount);
  }

  const handleIncomeNameChange = (e) => {
    setIncomeName(e.target.value);
    console.log(e.target.value);
  }

  const handleIncomeAmountChange = (e) => {
    setIncomeAmount(e.target.value);
    console.log(e.target.value);
  } 

  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value);
    console.log(e.target.value);
  }

  const handleExpenseAmountChange = (e) => {
    setExpenseAmount(e.target.value);
    console.log(e.target.value);
  }

  const handleEdit = (type, id, editable) => {
    console.log('Edycja');
  }

  const handleDelete = (id) => {
    console.log('Kasowanie');
  }



  return (
    <>
        <Header balance={balance}/>
        <Content 
          onAdd={handleAdd} 
          onEdit={handleEdit}
          onDelete={handleDelete}
          onIncomeNameChange={handleIncomeNameChange}
          onIncomeAmountChange={handleIncomeAmountChange}
          onExpenseNameChange={handleExpenseNameChange}
          onExpenseAmountChange={handleExpenseAmountChange}
          incomesList={incomesList}
          incomesTotal={incomesTotal}
          expensesList={expensesList}
          expensesTotal={expensesTotal}

        />
    </>
  );
}

export default App;