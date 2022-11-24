import { createSlice } from "@reduxjs/toolkit";

const initialPopupState = { item: null, itemDetail: null };

export const popupSlice = createSlice({
  name: "POPUP",
  initialState: initialPopupState,
  reducers: {
    popupShow: (state, action) => {
      state.item = action.payload;
      console.log(state);
    },
    popupHide: (state) => {
      state.item = null;
    },
    itemDetail(state, action) {
      console.log("action:", action);
      state.itemDetail = action.payload;
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
