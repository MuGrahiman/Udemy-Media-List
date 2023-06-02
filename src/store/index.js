import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumApi } from "./apis/albumApi";
import { photoApi } from "./apis/photoApi";

const { configureStore } = require("@reduxjs/toolkit");
const { usersReducer } = require("./slices/usersSlices");

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumApi.middleware)
      .concat(photoApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUsers";
export * from "./thunks/removeUser";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumApi";
export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "./apis/photoApi";
