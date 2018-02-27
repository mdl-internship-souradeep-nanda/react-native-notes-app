import { createStore } from 'redux';

import noteReducer from './Reducers/NoteReducer';

export default createStore(
  noteReducer,
  {},
);