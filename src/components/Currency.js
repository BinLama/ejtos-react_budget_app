import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    // const { dispatch,remaining  } = useContext(AppContext);
    const [chosen, setChosen] = useState("£ Pound");
    
    return (
        // <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
        //     <div className="input-group-prepend">
        //     <label className="input-group-text" htmlFor="inputGroupSelect01">Currency ({chosen}) </label>
        //     </div>
        //     <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setChosen(event.target.value)}>
        //         <option defaultValue>Choose...</option>
        //         <option value="Marketing" name="marketing"> £ Pound</option>
        //         <option value="Sales" name="sales">£ Pound</option>
        //         <option value="Finance" name="finance">£ Pound</option>
        //     </select>
        // </div>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Currency ({chosen}) 
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item" href="#">Action</button>
            </div>
        </div>
    );
};

export default Currency;
