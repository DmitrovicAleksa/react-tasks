import { SET_USER } from "./user.types"



const initialState = {
    user : {}
}

const userReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_USER:
            const {user} = action;
            return{
                ...state, user: user
            }
        default:
            return state;
    }
};

export default userReducer;