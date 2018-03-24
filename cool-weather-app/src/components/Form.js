import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input id="city" type="text" name="city" placeholder="City..." />
        <input id="country" type="text" name="country" placeholder="Country..." />
        <button>Get weather</button>
        <button 
            onClick={props.clearField}
            style={{backgroundColor: '#C20114', marginBottom: '2rem'}} 
            type="reset">Reset</button>
    </form>
)

export default Form