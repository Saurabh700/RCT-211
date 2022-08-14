import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const store = legacy_createStore(reducer);
export { store };

// while working with redux we can use only one store for all the data manipulation
