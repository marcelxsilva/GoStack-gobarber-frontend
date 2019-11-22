import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'gobarber', // nome que ficara em localstorage
    storage, // o proprio storage
    whitelist: ['auth', 'user'], // reducers que queremos persistir
  }, reducers)
  return persistedReducer;
}