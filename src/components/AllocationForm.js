import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        const isNumerical = (num) => {
            const numbers = new Set(["0","1","2","3","4","5","6","7","8","9"])
            if (num.length < 1) return false;
            for (let n of num) {
                console.log(n);
                if (!numbers.has(n)) {
                    return false
                }
            }
            return true;
        }

        if (isNumerical(cost)) {
            if(cost > remaining && ( action === "Add" || action === "")) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }

            const expense = {
                name: name,
                cost: parseInt(cost),
            };
            if(action === "Reduce") {
                dispatch({
                    type: 'RED_EXPENSE',
                    payload: expense,
                });
            } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
        } else {
            alert(`Please provide a valid number.`)
        }
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>
                    <span style={{ marginLeft: '2rem', marginRight: "0.625rem" , size: 10, marginBlock: "auto"}}>£</span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}>
                    </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                </div>

        </div>
    );
};

export default AllocationForm;
