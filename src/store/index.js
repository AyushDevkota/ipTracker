import { configureStore } from "@reduxjs/toolkit";

import inputReducer from "./input";
import geoDataReducer from "./geoData";

const store = configureStore({
	reducer: { input: inputReducer, data: geoDataReducer },
});

export default store;
