import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Section from '../FeedbackWidget/Section/Section';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactsList/ContactList';
import Filter from './Filter/Filter';

import styles from './PhoneBook.module.css';

class PhoneBook extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

  static defaultProps = {
    name: '',
    number: '',
  };

  state = {
    contacts: [
      //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = (name, number) => {
    const newContact = {
      id: uniqid(),
      name,
      number,
    };

    const existedContact = this.state.contacts.filter(
      contact => contact.name === newContact.name,
    );

    if (existedContact.length) {
      return alert(`${newContact.name} already exist`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  filtredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  render() {
    const contacts = this.filtredContacts();

    return (
      <div className={styles.phoneBook}>
        <Section title="Phonebook">
          <AddContactForm submitHandler={this.addNewContact} />
        </Section>
        {this.state.contacts.length === 0 ? null : (
          <Section title="Contacts">
            {this.state.contacts.length > 1 ? (
              <Filter
                value={this.state.filter}
                changeHandler={this.filterContacts}
              />
            ) : null}
            <ContactList list={contacts} handleRemove={this.removeContact} />
          </Section>
        )}
      </div>
    );
  }
}

export default PhoneBook;
