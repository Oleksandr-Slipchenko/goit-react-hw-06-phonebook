import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const addContact = createAction('contacts/add', (number, name) => ({
  payload: {
    id: uuid(),
    number,
    name,
  },
}));

// const addContact = (number, name) => ({
//   type: types.ADD,
//   payload: {
//     id: uuid(),
//     number,
//     name,
//   },
// });

const removeContact = createAction('contacts/remove');

// const removeContact = contactId => ({
//   type: types.REMOVE,
//   payload: contactId,
// });

const changeFilter = createAction('contacts/changeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, removeContact, changeFilter };
