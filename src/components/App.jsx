// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PhonebookForm from "./PhonebookForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Container } from "./App.styled";

export function App() {
    return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm  />
      <h2>Contacts</h2>
      <Filter  />
      <ContactList />
    </Container>
    );
  
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
}
