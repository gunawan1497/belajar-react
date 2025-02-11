// import toolkit from "@reduxjs/toolkit";

// const { configureStore, createAction, createReducer } = toolkit;

import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

// const initialState = {
//     cart: [],
// };

// const cartReducer = createReducer(initialState, (builder) => {
const cartReducer = createReducer([], (builder) => {
    // builder.addCase("ADD_TO_CART", (state, action) => {
    builder.addCase(addToCart, (state, action) => {
        // state.cart = [...state.cart, action.payload],
        // state.cart.push(action.payload);
        state.push(action.payload);
    });
});

const login = createAction("CREATE_SESSION");

// const loginReducer = createReducer(false, (builder) => {
const loginReducer = createReducer({ status: false }, (builder) => {
    builder.addCase(login, (state, action) => {
        // state = true;
        state.status = true;
    });
})

const store = configureStore({
    // reducer: createReducer, // satu reducer
    reducer: {
        login: loginReducer,
        cart: cartReducer,
    },
});
console.log("oncreate store : ", store.getState());

store.subscribe(() => {
    console.log("onchange store : ", store.getState());
});

// const action1 = { type: "ADD_TO_CART", payload: { id: 3, qty: 20 } };
// const action1 = addToCart({ id: 3, qty: 20 });
store.dispatch(addToCart({ id: 3, qty: 20 }));
store.dispatch(addToCart({ id: 4, qty: 20 }));
store.dispatch(login());