import filterReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter value', () => {
  const state = filterReducer(undefined, {type:'@@INIT'})  
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should change sortBy value to amount', () => {
    const state = filterReducer(undefined, {type:'SORT_BY_AMOUNT'})  
expect(state.sortBy).toBe('amount')
})

test('should change sortBy value to date', () => {
    const state = {
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    const action = {type:'SORT_BY_DATE'}
    const newState = filterReducer(state, action)  
expect(newState.sortBy).toBe('date')
})

test('should change text filter value', () => {
    const text = 'wat!!'
    const action = {
        type:'SET_TEXT_FILTER',
        text
    }
    const newState = filterReducer(undefined, action)  
expect(newState.text).toBe('wat!!')
})

test('should change start date value', () => {
    const startDate = moment().startOf('month').subtract(20, 'days')
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const newState = filterReducer(undefined, action)  
expect(newState.startDate).toBe(startDate)
})

test('should change end date value', () => {
    const endDate = moment().startOf('month').add(20, 'months')
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    const newState = filterReducer(undefined, action)  
expect(newState.endDate).toBe(endDate)
})
