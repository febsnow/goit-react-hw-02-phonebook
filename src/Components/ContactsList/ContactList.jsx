import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import styles from './ContactList.module.css';

const ContactList = ({ list, handleRemove }) => {
  return (
    <ul className={styles.list}>
      {list.map(contact => {
        const id = uniqid();
        return (
          <li key={id} className={styles.listItem}>
            <span className={styles.info}>{contact.name}:</span>
            <span className={styles.info}>{contact.number}</span>
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                handleRemove(contact.id);
              }}>
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ContactList;
