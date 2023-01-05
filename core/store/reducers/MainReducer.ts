import {MainSliceModel} from "@models/interfaces/reducers";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: MainSliceModel = {
    isLoading: false
};

const MainSlice = createSlice({
    name: "main-slice",
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            let {payload} = action;
            state.isLoading = payload;
        }
    }
});

export const {
    setLoading
} = MainSlice.actions;

export default MainSlice.reducer;