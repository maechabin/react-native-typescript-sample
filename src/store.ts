import { createStore } from 'redux';
import { state } from './state';
import { reducer } from './reducers';

export const store = createStore(reducer, state);