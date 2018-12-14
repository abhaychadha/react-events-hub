import React from 'react';
import Select from 'react-select';

const Autocomplete = props => {
    return <Select 
    autoFocus options={props.list} 
    closeMenuOnSelect = {true} 
    hideSelectedOptions={true} 
    onChange={props.handleChange}    
    value = {props.value}
    label = {props.label}
    classNamePrefix = {props.classNamePrefix}/>
}

export default Autocomplete;