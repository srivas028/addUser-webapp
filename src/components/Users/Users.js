import React, {useState} from 'react';
import UI from '../UI/UI';
import classes from './Users.module.css';
import Button from '../UI/Button';


const Users  = (props) => {
    const [enterdUserName, setEnteredUserName]  = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUser = (event) => {
        event.preventDefault();

        if ((enterdUserName.trim().length === 0) || (enteredAge.trim().length === 0)) {
            return alert("Please enter a valid name and age (non-empty values)")
        }

        if (enteredAge < 1) {
            return alert('Please enter a valid age(>0)')
        }
        props.onAddUser(enterdUserName, enteredAge);
        setEnteredUserName("");
        setEnteredAge("");
    }

    const userNameChange = (event) => {
        setEnteredUserName(event.target.value)
    }

    const ageChange = (event) => {
        setEnteredAge(event.target.value)
    }

    return (
        <div>
            <UI className={classes.input}>
            <form onSubmit={addUser}>
                <div>
                    <label htmlFor='username'>User Name</label>
                    <input id = "username" type="text" value={enterdUserName} onChange={userNameChange}/>
                    <label htmlFor='age'>Age (Numbers)</label>
                    <input id = "age" type="number" value={enteredAge} onChange={ageChange} />
                    <Button type='submit' >Add User</Button>
                </div>
            </form>
        </UI>
    </div>
    )
}

export default Users