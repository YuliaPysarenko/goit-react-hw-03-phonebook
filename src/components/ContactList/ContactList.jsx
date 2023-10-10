import React from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ElementContactList from "components/ElementContactList";
 const idList = shortid.generate();

const ContactList = ({ contacts,buttonDelete }) => {
    return (
        <div>
           <ul className={css.listItem} key={idList}>{contacts.map(({id,name,number}) =>
             <li className={css.item} key={shortid.generate()}>
               <ElementContactList
                 name={name}
                 number={number}
                 onDelete={() => buttonDelete(id)} />
             </li>)}
       
          </ul> 
        </div> )
      
}

ContactList.protoType = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  
  buttonDelete: PropTypes.func.isRequired
}

export default ContactList