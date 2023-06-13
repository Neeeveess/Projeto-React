export function reducer(state, action) {
    switch (action.type) {
        case "numberAdd2":
            return { ...state, number: state.number + 2 };
        case "numberMult7":
            return { ...state, number: state.number * 7 };
        case "numberDiv25":
            return { ...state, number: state.number / 25 };
        case "parseInt":
            return { ...state, number: parseInt(state.number) };
        case "numeroQqr":
            return { ...state, number: state.number + action.num };
        case "login":
            return { ...state, user: { name: action.payload } };
        default:
            return state;
    }
}
