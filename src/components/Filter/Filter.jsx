import React from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
import css from './Filter.module.css'

const findContactsId = shortid.generate();

const Filter = ({ value, filter }) => {
    return (
    <div className={css.filter}>
          Find contacts by name
        <input
          className={css.inputFilter}
            id={findContactsId}
            value={value}
            type="text"
            name="filter"
            onChange={filter} />
    </div>)
}

Filter.protoType = {
  value: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired
}

export default Filter;