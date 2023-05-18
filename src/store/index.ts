import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { useSelector } from 'react-redux';
import authReducer from './auth/slice';
import redirectReducer from './redirect/slice';
import sidebarReducer from './sidebar/slice';
import storage from 'redux-persist/lib/storage';
import themeReducer from './theme/slice';
import thunkMiddleware from 'redux-thunk';
import type { TypedUseSelectorHook } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'redirect', 'theme', 'sidebar']
};

const rootReducer = combineReducers({
  auth: authReducer,
  redirect: redirectReducer,
  sidebar: sidebarReducer,
  theme: themeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ middleware: [thunkMiddleware], reducer: persistedReducer });
export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
