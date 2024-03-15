const __INITIAL_STATE = {
    isLoggedIn: false,
};

const reducer = (state = __INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: true };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};

export default reducer;
