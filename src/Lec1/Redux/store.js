import { legacy_createStore } from "redux";
// import { createStore } from "redux"; --> used in older version of redux
// create_store and legacy_createStore are quite similar they both creates a redux store that holds some kind of data / state tree.. but create_store is now discontinued by developeres
import { reducer } from "./reducer";

export const store = legacy_createStore(reducer, { count: 0 });
// export { store };
