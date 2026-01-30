// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./authSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice";

export const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});

