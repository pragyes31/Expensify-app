import moment from 'moment'

export default [
    {
    description:"Movie",
    note:"badla",
    amount:313,
    createdAt:moment(0).subtract(5, 'days').valueOf(),
    id:0
},
{
    description:"Fuel",
    note:"petrol",
    amount:300,
    createdAt:moment(0).add(4,'days').valueOf(),
    id:1
},
{
    description:"Food",
    note:"dosa",
    amount:114,
    createdAt:0,
    id:2
}
]
