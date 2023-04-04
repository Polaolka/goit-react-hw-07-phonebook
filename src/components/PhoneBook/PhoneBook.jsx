import { useState } from 'react';
import css from '../PhoneBook/PhoneBook.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputContact = event => {
    switch (event.target.name) {
      case 'name':
        setName(s => (s = event.target.value));
        console.log(name);
        break;
      case 'number':
        setNumber(s => (s = event.target.value));

        break;
      default:
        return;
    }
  };

  const contacts = useSelector(selectContacts);
  const handleSubmit = e => {
    e.preventDefault();
    const checkName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (checkName) {
      toast(`${name} is already in contacts`);
      return;
    }
    const data = { name, number };

    dispatch(addContact(data));
    toast(`Contact ${name} added successfully`);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={onInputContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={onInputContact}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.buttonAdd} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
};
