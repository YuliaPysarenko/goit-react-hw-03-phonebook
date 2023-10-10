import React, { Component } from "react";
// import shortid from "shortid";
import PropTypes from 'prop-types';
import css from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: ''
  }

  // nameInputId = shortid.generate();
  // numberInputId = shortid.generate();

  handleInputContacts = (e) => {
    const { name, value } = e.currentTarget
    this.setState({
      [name]: value
    })
  }


  handleSubmit = e => {
    e.preventDefault()
    this.reset()
    this.props.objectForm(this.state)  
  }

  reset = () => {
    this.setState({ name: '', number: '' })
  }

 

  render() {
    return (
      <section>
      
        <form onSubmit={this.handleSubmit} className={css.form}>
          {/* <label htmlFor={this.nameInputId}> */}
            <label>
            Name
            <input
               className={css.inputForm}
              // id={this.nameInputId}
              value={this.state.name}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputContacts} />
          </label>
        <label>
          {/* <label htmlFor={this.numberInputId} > */}
            Number
            <input className={css.inputForm}
              // id={this.numberInputId}
              value={this.state.number}
              type="tel"
              name="number"
              //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputContacts}
            />
          </label>
     
          <button type="Submit" className={css.buttonForm}>Add contact</button>
        </form>
        
      </section>
  )
  } 
}

Form.propTypes = {
  objectForm: PropTypes.func.isRequired
}
export default Form;