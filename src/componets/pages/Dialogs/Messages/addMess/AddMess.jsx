import React from 'react';
import s from './AddMess.module.css';

const AddMess = () => {
    return(
        <form action="">
            <div><label htmlFor="text"><b>Input Your new message, please.</b></label></div>
            <div><textarea name="" id="" cols="30" rows="5"></textarea></div>
            <div><button>Submit</button></div>
        </form>
    );
}

export default AddMess;
