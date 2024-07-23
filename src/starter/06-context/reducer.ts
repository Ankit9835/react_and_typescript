import { string } from "zod";

export type CounterState = {
    count:number,
    state:string
}

export const initialState: CounterState = {
    count:0,
    state:'Pending...'
}

type UpdateCounterAction = {
    type: 'increment' | 'decrement' | 'reset'
}

type SetStatusPayload = {
    type: 'setStatus',
    payload: 'active' | 'inactive'
}

type CounterAction = UpdateCounterAction | SetStatusPayload

export const counterReducer = (state: CounterState, action:CounterAction): CounterState => {
    switch(action.type){
        case 'increment':
            return {...state, count:state.count + 1}
        case 'decrement':
            return {...state, count:state.count - 1}
        case 'reset':
            return {...state, count:0}
        case 'setStatus':
            return {...state, state:action.payload }
        default:
            return state
    }
}