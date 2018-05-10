import * as types from '../constants/ActionType'
import * as Message from '../constants/Message'

var inittialState = Message.MSG_WELCOME;


const message = (state = inittialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }
}

export default message;