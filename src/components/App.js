import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { selectContacts, selectError, selectLoading } from '../redux/selectors';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from '../redux/operations';
import { showError } from '../utils';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Spinner } from './Spinner/Spinner';
import classes from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      showError(error);
    }
  }, [error]);

  return (
    <div className={classes.container}>
      {isLoading && <Spinner />}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        'No contacts added'
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
