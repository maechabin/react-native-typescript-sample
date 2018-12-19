import { createStore } from 'redux';
import { state } from './state';
import { reducer } from './reducers';
export var store = createStore(reducer, state);
