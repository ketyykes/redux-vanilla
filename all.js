import { createStore } from 'redux'
const initState = {
    money: 1000
}
function ATMReducer(state = initState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return { money: state.money + 100 }
        case 'WITHDRAW':
            return { money: state.money - 100 }
        default:
            return state
    }
}
let store = createStore(ATMReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch({
    type: 'WITHDRAW'
});
store.dispatch({
    type: 'DEPOSIT'
});
store.dispatch({
    type: 'WITHDRAW'
});