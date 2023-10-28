import { CounterAction } from "../actions/actions"
import { CounterState } from "../interfaces/interfaces"


export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    
    const { counter, changes } = state

    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0
            }
        case 'increseBy':
            const { value } = action.payload
            return {
                ...state,
                previous: counter,
                counter: counter + value,
                changes: changes + 1,
            }
        default:
            return state;
    }
}