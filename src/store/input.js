import { createSlice } from "@reduxjs/toolkit";

const initialInputState = { value: "" };

const inputSlice = createSlice({
	name: "input ip",
	initialState: initialInputState,
	reducers: {
		update(state, action) {
			state.value = action.payload;
		},
	},
});

export const inputActions = inputSlice.actions;

export default inputSlice.reducer;
