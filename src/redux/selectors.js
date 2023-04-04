import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectContactFilter = state => state.filter;

export const selecVisibleContacts = createSelector(
  [selectContacts, selectContactFilter],
  (tasks, filter) => {
    return tasks.filter(contact => contact.name.toLowerCase().includes(filter));
  }
);
