import React, {Component} from 'react';
import './userOutput.css'

const UserOutput = (props) => {
    return (
        <div className='output'>
            <p onClick={props.click}>{props.username}</p>
        </div>
    );
}

export default UserOutput;