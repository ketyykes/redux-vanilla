import { createStore } from 'redux'
const initState = {
    money: 1000,
}
const depositActionCreator = (payload) => (
    {
        type: 'DEPOSIT',
        payload
    })
const withdrawActionCreator = (payload) => (
    {
        type: 'WITHDRAW', payload
    }
)
function ATMReducer(state = initState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return { money: state.money + action.payload }
        case 'WITHDRAW':
            return { money: state.money - action.payload }
        default:
            return state
    }
}
let store = createStore(ATMReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(depositActionCreator(100));
store.dispatch(withdrawActionCreator(200));
store.dispatch(depositActionCreator(500));