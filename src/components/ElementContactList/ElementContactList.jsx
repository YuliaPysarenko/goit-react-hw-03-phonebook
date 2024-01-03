import React from "react";
import PropTypes from 'prop-types';
import css from './ElementContactList.module.css';

 

const ElementContactList = ({ name, number, onDelete, id}) => {
    return (
        <div>
               <p className={css.itemPage}>
                 <span>{name}:</span>
                 <span className={css.number}>{number}</span>
               </p>
        <button type="button" onClick={() => onDelete(id)} className={css.deleteButton}>Delete</button> 
        </div> )
      
}

ElementContactList.protoType = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default ElementContactList