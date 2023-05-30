import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STRORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addCOntactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STRORAGE_KEY)
    );
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STRORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact addCOntactHandler={addCOntactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
