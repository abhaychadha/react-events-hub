import React from 'react';
import { mount } from 'enzyme';
import Autocomplete from '../autocomplete';


it('Autocomplete list being populated', () => {


    const SelectMount = mount(
    <Autocomplete 
        classNamePrefix="list" 
        options={[{ label: 'item 1', value: 1 }]}
    />);

    
    SelectMount.find('.list__dropdown-indicator').simulate('mouseDown', { button: 0 });
    expect(SelectMount.find('.list__control').length).toEqual(1);
});