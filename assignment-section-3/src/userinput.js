import React, {Component} from 'react';

const UserInput = (props) => {
    return (
        <input type="text" onChange={props.change} />
    )
}

export default UserInput;