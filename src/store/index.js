import { configureStore } from "@reduxjs/toolkit";
import { popupSlice } from "./popup";
import { validateSlice } from "./validateSlice";

const store = configureStore({
  reducer: { popup: popupSlice.reducer, validate: validateSlice.reducer },
});

export default store;
