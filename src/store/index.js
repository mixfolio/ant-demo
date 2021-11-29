import { combineReducers, createStore } from "redux";

const defaultState = {
    collapsed: true,
    visibleDrawer: true

}
const interfaceReducer = (state = defaultState, action) => {
    switch(action.type) {
        default :
        return state
    }
}
const rootReducer = combineReducers({
    interface : interfaceReducer
})
export const store = createStore(rootReducer);