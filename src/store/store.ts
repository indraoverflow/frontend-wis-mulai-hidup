import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/dummy/dummySlice";
import { userApi } from "./features/dummy/api/apiSlice";
import { weddingReceptionApi } from "./features/invitation/wedding-reception-slice";
import { userProfileApi } from "./features/user/profile";
import { userPasswordApi } from "./features/user/password";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      userApi: userApi.reducer,
      userProfileApi: userProfileApi.reducer,
      userPasswordApi: userPasswordApi.reducer,
      weddingReceptionApi: weddingReceptionApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        userApi.middleware,
        weddingReceptionApi.middleware,
        userProfileApi.middleware,
        userPasswordApi.middleware
      ),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
