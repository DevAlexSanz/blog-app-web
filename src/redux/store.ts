import { configureStore } from "@reduxjs/toolkit";
import BlogApi from "@api/blogApi";

export const store = configureStore({
  reducer: {
    [BlogApi.reducerPath]: BlogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(BlogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
