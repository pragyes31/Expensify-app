import expenses from '../../selectors/expenses'
import moment from 'moment';

const expense = [
    {
    description:"Movie",
    note:"badla",
    amount:313,
    createdAt:moment(0).subtract(5, 'days').valueOf()
},
{
    description:"Fuel",
    note:"petrol",
    amount:300,
    createdAt:moment(0).add(4,'days').valueOf()
},
{
    description:"Food",
    note:"dosa",
    amount:114,
    createdAt:0
}
]

test('should filter expense by startDate', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = expenses(expense, filters)
expect(result).toEqual(expense[1], expense[2])   
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

