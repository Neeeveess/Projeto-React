import { reducer } from "./reducers";
import { numberAdd2 } from "./actions/number";

const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco vvv
    number: 0,
};

export { reducer, initialState, numberAdd2 };
