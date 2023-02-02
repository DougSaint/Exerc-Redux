import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { formReducer } from './reducers';


export const store = createStore(formReducer, composeWithDevTools());
