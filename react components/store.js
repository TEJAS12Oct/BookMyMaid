

import { createStore } from "redux";
import reducer1 from "./reducer1";


const initialSt = { loggedin : false }

const mystore = createStore(reducer1, initialSt)
export default mystore;