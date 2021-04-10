import React, {useEffect, useState} from 'react';
import Header from './Header';
import Content from './Content';
import '../styles/content.css';
import '../styles/header.css';

function App() {

  const [incomesList, setIncomesList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
  const [incomesTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [balance, setBalance] = useState(0);
  const [inEdit, setInEdit] = useState({});
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);

  useEffect(() => {
    setIncomeTotal(incomesList.reduce((sum, el) => sum + el.amount, 0))
  },[incomesList]);

  useEffect(() => {
    setExpensesTotal(expensesList.reduce((sum, el) => sum + el.amount, 0))
  },[expensesList]);

  useEffect(() => {
    setBalance(incomesTotal-expensesTotal);
  },[incomesTotal, expensesTotal]);
  
  const handleAdd = (type) => {
    const name = type==="income" ? incomeName : expenseName;
    const amount = type==="income" ? Number(incomeAmount) : Number(expenseAmount);
    if(!checkInputs(type,name,amount)){
      return false;
    }
    const newListElement = {id: Date.now(), text: name, amount: amount};
    if(type==='income') {
      setIncomesList([...incomesList, newListElement]);
    } else {
      setExpensesList([...expensesList, newListElement]);
    }
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

  const checkInputs = (type, name, amount) => {
    const nameOk = name.length>=3;
    const amountOk = amount>0;
    const typePl = type === "income" ? 'przychodu' : 'wydatku';
    if(!nameOk && !amountOk) {
      alert(`Należy podać poprawną nazwę ${typePl} (min. 3 znaki) oraz kwotę (większą od zera)`);
    } else if(!nameOk) {
        alert(`Nazwa ${typePl} musi mieć min. 3 znaki.`);
    } else if(!amountOk) {
        alert(`Kwota ${typePl} musi być większa od zera`);
    } else {
        return true;
    }
    return false;
  }

  function checkAmount(amount) {
    return !isNaN(Number(amount)) && Number(amount) > 0;
  }

  function checkName(name) {
    return name.length>=3;
  }

  return (
    <>
        <Header 
          balance={balance}
        />
        <Content 
          onAdd={handleAdd} 
          onEdit={handleEdit}
          onDelete={handleDelete}
          inEdit={inEdit}
          onIncomeNameChange={handleIncomeNameChange}
          onIncomeAmountChange={handleIncomeAmountChange}
          onExpenseNameChange={handleExpenseNameChange}
          onExpenseAmountChange={handleExpenseAmountChange}
          incomesList={incomesList}
          incomesTotal={incomesTotal}
          expensesList={expensesList}
          expensesTotal={expensesTotal}
          incomeName={incomeName}
          incomeAmount={incomeAmount}
          expenseName={expenseName}
          expenseAmount={expenseAmount}
        />
    </>
  );
}

export default App;