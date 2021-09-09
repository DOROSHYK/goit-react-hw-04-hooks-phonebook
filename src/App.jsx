import React, { Component } from "react";
import shortid from "shortid";
import InputForm from "./component/InputForm/InputForm";
import Phonebook from "./component/PhoneBook/PhoneBook";
import Filter from "./component/Filter/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsContacts = JSON.parse(contacts);

    if (parsContacts) {
      this.setState({ contacts: parsContacts });
    }
  }

  componentDidUpdate(prevPr, { contacts }) {
    const newContact = this.state.contacts;
    if (newContact !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(newContact));
    }
  }

  addContacts = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };

    const findContact = contacts.find((contact) => contact.name.includes(name));
    if (findContact) {
      alert("котакт уже є");
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = (name) => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter((contact) => contact.name !== name),
    });
  };

  findContact = () => {
    const { contacts } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  formSabmitHangler = (data) => {
    // console.log(data);
    this.addContacts(data);
  };

  render() {
    const { contacts } = this.state;

    const visibleContact =
      this.state.filter === 0 ? contacts : this.findContact();

    const { filter } = this.state;

    return (
      <>
        <div className="container">
          <h1 className="title"> PhoneBook </h1>
          <InputForm onSubmit={this.formSabmitHangler} />

          <Filter value={filter} onChange={this.changeFilter} />

          <Phonebook date={visibleContact} onDelete={this.deleteContact} />
        </div>
      </>
    );
  }
}

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsContacts = JSON.parse(contacts);

//     if (parsContacts) {
//       this.setState({ contacts: parsContacts });
//     }
//   }

//   componentDidUpdate(prevPr, { contacts }) {
//     const newContact = this.state.contacts;
//     if (newContact !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(newContact));
//     }
//   }

//   addContacts = ({ name, number }) => {
//     const { contacts } = this.state;
//     const contact = {
//       name,
//       number,
//       id: shortid.generate(),
//     };

//     const findContact = contacts.find(contact => contact.name.includes(name));
//     if (findContact) {
//       alert('котакт уже є');
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [contact, ...contacts],
//       }));
//     }
//   };

//   deleteContact = name => {
//     const { contacts } = this.state;

//     this.setState({
//       contacts: contacts.filter(contact => contact.name !== name),
//     });
//   };

//   findContact = () => {
//     const { contacts } = this.state;

//     const normalizedFilter = this.state.filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   changeFilter = ({ target }) => {
//     this.setState({ filter: target.value });
//   };

//   formSabmitHangler = data => {
//     // console.log(data);
//     this.addContacts(data);
//   };

//   render() {
//     const { contacts } = this.state;

//     const visibleContact =
//       this.state.filter === 0 ? contacts : this.findContact();

//     const { filter } = this.state;

//     return (
//       <>
//         <div className="container">
//           <h1 className="title"> PhoneBook </h1>
//           <InputForm onSubmit={this.formSabmitHangler} />

//           <Filter value={filter} onChange={this.changeFilter} />

//           <Phonebook date={visibleContact} onDelete={this.deleteContact} />
//         </div>
//       </>
//     );
//   }
// }

export default App;
