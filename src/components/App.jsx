// import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const value = useSelector(state => state.contacts);

  // console.log(value);
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem(TEL)) ?? data
  // );
  // const [filter, setFilter] = useState('');

  // const filteredNames = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // useEffect(() => {
  //   if (contacts !== data) {
  //     localStorage.setItem(TEL, JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // const handleFilter = event => {
  //   const { value } = event.target;
  //   setFilter(value);
  // };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contacts={value} />
      <h2>Contacts</h2>
      {/* <Filter filter={filter} onFilter={handleFilter} /> */}
      <Filter />
      {/* <ContactList contacts={filteredNames} onDelete={handleDelete} /> */}
      <ContactList contacts={value} />
    </Container>
  );
};
