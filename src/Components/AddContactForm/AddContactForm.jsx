import React, { Component } from 'react';
import styles from './AddContactForm.module.css';

class AddContactForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = evt => {
    evt.preventDefault();

    this.props.submitHandler(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form className={styles.contactsForm} onSubmit={this.submitHandler}>
          <label htmlFor="contactName" className={styles.label}>
            Name
          </label>
          <input
            className={styles.formInput}
            type="text"
            value={this.state.name}
            name="name"
            id="contactName"
            placeholder="Enter name"
            required
            onChange={this.changeHandler}
          />
          <label htmlFor="contactNumber" className={styles.label}>
            Number
          </label>
          <input
            className={styles.formInput}
            type="tel"
            value={this.state.number}
            name="number"
            id="contactNumber"
            placeholder="Enter phone number"
            required
            onChange={this.changeHandler}
          />
          <button className={styles.addButton} type="submit">
            Add contacts
          </button>
        </form>
      </>
    );
  }
}

export default AddContactForm;
