import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root-rdndevuber',
  storage: AsyncStorage,
  whitelist: ['userReducer'],
};

const reducerPersist = persistReducer(persistConfig, rootReducer);

export const store = createStore(reducerPersist);

export const persistor = persistStore(store);
