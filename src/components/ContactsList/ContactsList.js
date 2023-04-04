import React from 'react';
import css from '../ContactsList/ContactsList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';
import { selecVisibleContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selecVisibleContacts);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
    toast.error('One contact has been deleted');
  };

  return (
    <ul className={css.listWrapper}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <p className={css.name}>{name}:</p>
          <p className={css.number}>{number}</p>
          <button
            type="button"
            className={css.button}
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
