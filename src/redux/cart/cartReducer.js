import { OPEN, CLOSE } from './cartTypes';

    const INITIAL_STATE = {
        toggleCart: false,
    };

    const reducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case OPEN:
               return {
                    ...state, toggleCart: true,
               };
            case CLOSE:
               return {
                    ...state, toggleCart: false,
               };
             default: return state;
        }
    };

    export default reducer;