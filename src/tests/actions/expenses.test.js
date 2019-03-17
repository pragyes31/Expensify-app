import {addExpense, editExpense, removeExpense} from '../../actions/expenses'
import { EPERM } from 'constants';

test("should setup remove expenses action object", () => {
    const action = removeExpense({id:12344})
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:12344
    })
})

test("should setup edit expense action object", () => {
    const action = editExpense('12345', {note:"That's for Pani puri"} )
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:"12345",
        updates:{
            note: "That's for Pani puri"
        } 
    })
})

test ("setup Add expense action object", () => {
    const expenseData = {
        description:'flights',
        amount:47000,
        createdAt:31012019,
        note:'hum switzerland ja rhe hain'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id:expect.any(String)
        }
    })
})

test("setup add expense default action object", () => {
    const expenseData = {
        description:'',
        amount:0,
        createdAt:0,
        note:''
    }
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id:expect.any(String)
        }
    })
})