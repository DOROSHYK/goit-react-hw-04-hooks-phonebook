import React, { useState, useEffect } from "react";
import shortid from "shortid";
import { toast } from "react-toastify";
import InputForm from "./component/InputForm/InputForm";
import Phonebook from "./component/PhoneBook/PhoneBook";
import Filter from "./component/Filter/Filter";
import "./App.css";

function App() {
  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };
  const [filter, setFilter] = useState("");

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsContacts = JSON.parse(contacts);

  //   if (parsContacts) {
  //     this.setState({ contacts: parsContacts });
  //   }
  // }

  // componentDidUpdate(prevPr, { contacts }) {
  //   const newContact = this.state.contacts;
  //   if (newContact !== contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(newContact));
  //   }
  // }

  const addContacts = ({ name, number }) => {
    // const { contacts } = this.state;
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };

    const findContact = contacts.find((item) => item.name === contact.name);
    if (findContact) {
      // alert("котакт уже є");
      return toast.warn(`${contact.name} is already in contacts`);
    }

    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const deleteContact = (name) => {
    // const { contacts } = this.state;

    // this.setState({
    //   contacts: contacts.filter((contact) => contact.name !== name),
    // });
    setContacts(contacts.filter((contact) => contact.name !== name));
  };

  const findContact = () => {
    // const { contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = (ev) => {
    // this.setState({ filter: target.value });
    setFilter(ev.target.value);
  };

  const formSabmitHangler = (data) => {
    // console.log(data);
    addContacts(data);
  };

  // const { contacts } = this.state;

  const visibleContact = filter === 0 ? contacts : findContact();

  // const { filter } = this.state;

  return (
    <>
      <div className="container">
        <h1 className="title"> PhoneBook </h1>
        <InputForm onSubmit={formSabmitHangler} />

        <Filter value={filter} onChange={changeFilter} />

        <Phonebook date={visibleContact} onDelete={deleteContact} />
      </div>
    </>
  );
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
