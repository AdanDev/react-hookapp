import React from 'react';
import {shallow} from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas en HooksApp', () => {
    
    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();

    });

})
