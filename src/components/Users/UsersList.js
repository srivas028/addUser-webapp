import React from "react";
import UI from "../UI/UI";
import classes from './UsersList.module.css'

const UsersList = (props) => {
    return (
        <UI className={classes.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>  
                ))}
            </ul>
        </UI>
    )
}

export default UsersList;