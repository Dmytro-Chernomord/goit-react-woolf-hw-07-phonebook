import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import classes from './ContactList.module.css';
import svg from '../../icons/delete-2-svgrepo-com.svg';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={classes.container}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li className={classes.item} key={contact.id}>
            <div className={classes.names}><div> {contact.name}:</div> <div>{contact.phone}</div></div>
            <button
              className={classes.button}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <img className={classes.svg} width='24' height='24' src={svg} alt='delete'/>
            </button>
          </li>
        ))
      ) : (
        <div>Nothing found</div>
      )}
    </ul>
  );
};
