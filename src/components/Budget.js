import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, totalExpenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const max = 20000;

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (event.target.value > max) {
            alert("Budget cannot be higher than 20000");
            return;
        }
        if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending")
            return;
        }
        dispatch({type: 'SET_BUDGET', payload: parseInt(event.target.value)})
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} max={max}></input>
</div>
    );
};
export default Budget;
