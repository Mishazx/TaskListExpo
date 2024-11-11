import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';
import { persistReducer, persistStore } from 'redux-persist';
import { TaskType } from '@/types/Task';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
        ignoredPaths: ['persist', 'rehydrate'],
      },
    }),
});

export const persistor = persistStore(store);

store.subscribe(() => {
  console.log('Store:', store.getState());
});

export type RootState = {
  tasks: TaskType[];
};

export default store;
