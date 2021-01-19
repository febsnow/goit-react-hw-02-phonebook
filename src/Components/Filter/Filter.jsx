import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export default function Filter({ value, changeHandler }) {
  return (
    <div className={styles.filter}>
      <label htmlFor="filter" className={styles.label}>
        Find contacts by name
      </label>
      <input
        className={styles.formInput}
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={changeHandler}></input>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
};
