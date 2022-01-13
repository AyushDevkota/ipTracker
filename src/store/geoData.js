import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
	ip: "",
	location: "",
	timezone: "",
	isp: "",
	cords: [27.717245, 85.323959],
};

const geoDataSlice = createSlice({
	name: "Geo Data",
	initialState: initialDataState,
	reducers: {
		update(state, action) {
			state.ip = action.payload.ip;
			state.location = action.payload.location;
			state.timezone = action.payload.timezone;
			state.isp = action.payload.isp;
			state.cords = action.payload.cords;
		},
	},
});

export const dataActions = geoDataSlice.actions;

export default geoDataSlice.reducer;
