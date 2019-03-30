import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'

test('should render one list item', () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[2]}/>)
    expect(wrapper).toMatchSnapshot();
})