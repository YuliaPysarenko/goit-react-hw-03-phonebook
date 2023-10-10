import React, { Component } from "react";
import shortid from "shortid";
import css from './App.module.css'

import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  
    // contacts:[],
    filter: '',
  }


  idList = shortid.generate();
  findContactsId = shortid.generate();


  componentDidMount() {
    console.log(`componentDidMount`)
    const keyNewContacts = localStorage.getItem('newContacts')
    const parseNewContacts = JSON.parse(keyNewContacts)

    // if (parseNewContacts) {
    //   this.setState(prevState => ({
    //     // contacts: [parseNewContacts, ...prevState.contacts]
    //   }))
    // }
if (parseNewContacts) {
      this.setState({contacts: [...parseNewContacts]}
      )
    } 
  }

    componentDidUpdate(prevState) {
      if (this.state.contacts !== prevState.contacts) {
        localStorage.setItem('newContacts', JSON.stringify(this.state.contacts))
      }
    }
   
    filterValue = (e) => {
      this.setState({
        filter: e.currentTarget.value
      })
    
    }
 
    addContact = ({ name, number }) => {
      const newContacts = {
        id: shortid.generate(),
        name,
        number
      }
      const { contacts } = this.state;

      if (contacts.some((contact) => contact.name === name)) {
        alert(`${name} is already in contacts!`);
      } else {
        this.setState(prevState => ({
          contacts: [newContacts, ...prevState.contacts]
        })
        )
      }
    }


    filterContacts = () => {
      const { filter, contacts } = this.state;
      const normalizedFilter = filter.toLowerCase();
      const filterContactsFind = contacts.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizedFilter) ||
          number.toLowerCase().includes(normalizedFilter));
      return filterContactsFind;
    }

    deleteContact = (idcontact) => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== idcontact)
      }))
    }
 
    render() {
      const filterContactsFind = this.filterContacts();

      return (
        <section className={css.sectionApp}>
          <h1 className={css.title}>Phonebook</h1>
          <Form objectForm={this.addContact} />

          <h2 className={css.title}>Contacts</h2>
          <Filter value={this.state.filter} filter={this.filterValue} />
          <ContactList contacts={filterContactsFind} buttonDelete={this.deleteContact} />
        </section>
      )
    }
  

}



// export const App = () => {
//   return (
   
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
//   );

export default App