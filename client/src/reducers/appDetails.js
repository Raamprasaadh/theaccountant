  const appDetails = (state = { Records: [], Logged: false }, actions) => {
    switch (actions.type) {
        case "LOG_IN":
            return {
                ...state,
                logged: true
            };
            break;
        case "LOG_OUT":
            return {
                ...state,
                logged: false
            }
            break;
        case "UPDATE_RECORDS":
            return {
                ...state,
                Records: actions.payload
            }
            break;
        default:
            return state;
            break;
    }
}

export default appDetails;