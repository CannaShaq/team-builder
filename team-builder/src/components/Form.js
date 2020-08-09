import React from 'react';
import {useState} from 'react';



const Form = () => {
    const [formVal, setVal] = useState();

    return (
    <form>
        <label htmlFor="title">Title </label>
	    <input id="title" type="text"   placeholder="Enter title" />
        <br></br>
        <label htmlFor="email">Email </label>
        <input id="email" type="email" placeholder="Enter Email"/>
        <br></br>
        <label htmlFor="role">Role </label>
        <input id="role" type="text" placeholder="State your Role for Proj."/>
        <br></br>
        <button type="submit">Submit</button>
    </form>
    )
}

export default Form;