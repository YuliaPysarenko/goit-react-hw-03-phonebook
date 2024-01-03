import React from "react";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ElementContactList from "components/ElementContactList";


const ContactList = ({contacts, buttonDelete}) => {
    return (
        <div>
           <ul className={css.listItem}>{contacts.map(({id,name,number}) =>
             <li className={css.item} key={id}>
               <ElementContactList
                 name={name}
                 number={number}
                 id={id}
                onDelete={buttonDelete} />
             </li>)}
       
          </ul> 
        </div> )
      
}

ContactList.protoType = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  
  buttonDelete: PropTypes.func.isRequired
}

export default ContactList