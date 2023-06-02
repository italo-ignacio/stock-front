import { authReducer } from './auth/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { redirectReducer } from './redirect/slice';
import { sidebarReducer } from './sidebar/slice';
import { themeReducer } from './theme/slice';
import { useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import type { TypedUseSelectorHook } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage
};

const persistedAuth = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuth,
  redirect: redirectReducer,
  sidebar: sidebarReducer,
  theme: themeReducer
});

export const store = configureStore({ middleware: [thunkMiddleware], reducer: rootReducer });
export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
