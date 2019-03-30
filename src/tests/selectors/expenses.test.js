import expenses from '../../selectors/expenses'
import moment from 'moment';
import expense from '../fixtures/expenses'

test('should filter expense by startDate', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = expenses(expense, filters)
expect(result).toEqual([expense[1], expense[2]])   
})

test('should filter expense by endDate', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result = expenses(expense, filters)
expect(result).toEqual([expense[2], expense[0]])   
})

test('should filter expense by startDate and endDate', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:moment(0).add(7, 'days')
    }
    const result = expenses(expense, filters)
expect(result).toEqual([expense[1], expense[2]])   
})


test("should filter expenses by text value", () => {
const filters = {
    text:'e',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const result = expenses(expense, filters)
expect(result).toEqual([expense[1],expense[0]])
})

test("should filter expenses by amount value", () => {
    const filters = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = expenses(expense, filters)
    expect(result).toEqual([expense[0],expense[1], expense[2]])
    })
    

