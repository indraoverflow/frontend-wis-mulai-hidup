import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/dummy/dummySlice";
import { userApi } from "./features/dummy/api/apiSlice";
import { weddingReceptionApi } from "./features/invitation/wedding-reception-slice";
import { userProfileApi } from "./features/user/profile";
import { userPasswordApi } from "./features/user/password";
import { subscribeApi } from "./features/subscription/subscribe";
import { paymentApi } from "./features/payment/payment";
import { messageApi } from "./features/message/message-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      userApi: userApi.reducer,
      userProfileApi: userProfileApi.reducer,
      userPasswordApi: userPasswordApi.reducer,
      weddingReceptionApi: weddingReceptionApi.reducer,
      subscribeApi: subscribeApi.reducer,
      paymentApi: paymentApi.reducer,
      messageApi: messageApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        userApi.middleware,
        weddingReceptionApi.middleware,
        userProfileApi.middleware,
        userPasswordApi.middleware,
        subscribeApi.middleware,
        paymentApi.middleware,
        messageApi.middleware
      ),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
