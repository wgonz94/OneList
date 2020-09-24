import React from "react";

const Form = () => {

    // js functions here
    // Input handler
    const inputHandler = (e) => {
        console.log(e.target.value);
        //needs to set value for input here
    }
    // submit handler
    const submitHandler = (e) => {
        e.preventDefault();
        //assign values of todos in a string
        //clear input value after submitted for new entry
    }
    // status handler for filtering...



    return(
        <form>
            <input/>
            <button></button>
            <div className="select">
                <select>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;