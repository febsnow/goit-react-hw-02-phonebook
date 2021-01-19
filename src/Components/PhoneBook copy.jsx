import React, { Component } from 'react';
import uniqid from 'uniqid';
import styles from './PhoneBook.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = evt => {
    evt.preventDefault();

    const newContact = {
      id: uniqid(),
      name: this.state.name,
      number: this.state.number,
    };

    const existedContact = this.state.contacts.filter(
      contact => contact.name === newContact.name,
    );

    if (existedContact.length) {
      this.setState({ name: '', number: '' });
      return alert(`${newContact.name} already exist`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    this.setState({ name: '', number: '' });
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
        <form className={styles.contactsForm} onSubmit={this.submitHandler}>
          <label htmlFor="contactName">Name</label>
          <input
            className={styles.formInput}
            type="text"
            value={this.state.name}
            name="name"
            id="contactName"
            onChange={this.changeHandler}
          />
          <label htmlFor="contactNumber">Number</label>
          <input
            className={styles.formInput}
            type="tel"
            value={this.state.number}
            name="number"
            id="contactNumber"
            onChange={this.changeHandler}
          />
          <button className={styles.addButton} type="submit">
            Add contacts
          </button>
        </form>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          type="text"
          id="filter"
          name="filter"
          value={this.state.filter}
          onChange={this.changeHandler}></input>
        <ul>
          {contacts.map(contact => {
            const id = uniqid();
            return (
              <li key={id}>
                {contact.name}:{contact.number}
                <button
                  type="button"
                  onClick={() => {
                    this.removeContact(contact.id);
                  }}>
                  Удалить
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PhoneBook;
