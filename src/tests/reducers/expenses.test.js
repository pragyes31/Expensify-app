import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default values', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remvove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remvove expense of id which does not exist', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id:50
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        description:'travel',
    note:"to Hyd",
    amount:500,
    createdAt:0,
    id:3
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {

    const action = {
        type: 'EDIT_EXPENSE',
        id:2,
        updates:{
            note:'idli',
            amount:44
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[2].note).toBe('idli')
    expect(state[2].amount).toBe(44)
})

test('should not edit an expense if it is not present', () => {

    const action = {
        type: 'EDIT_EXPENSE',
        id:277,
        updates:{
            note:'uttapam',
            amount:144
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})
