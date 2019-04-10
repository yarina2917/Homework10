import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';
import user from './reducers/user';

const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    user
});

const persistConfig = {
    key: 'root',
    whitelist: ['user'],
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor };
}