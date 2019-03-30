import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render Expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

test('should render Expense form with expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm expenses={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot();
})