import { Section } from './Section/Section';
import { ContactsList } from './ContactsList/ContactsList';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operations";
// import { selectError, selectIsLoading } from "redux/selectors";

export default function App() {


  return (
    <>
      <Section title="Phonebook">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
                <ContactsList />
      </Section>
      <ToastContainer autoClose={2500} />
    </>
  );
}
