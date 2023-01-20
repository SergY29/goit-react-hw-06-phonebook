import { Container } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilter={handleFilter} />
      <ContactList contacts={filteredNames} />
    </Container>
  );
};

// const [contacts, setContacts] = useState(
//   () => JSON.parse(localStorage.getItem(TEL)) ?? data
// );

// useEffect(() => {
//   if (contacts !== data) {
//     localStorage.setItem(TEL, JSON.stringify(contacts));
//   }
// }, [contacts]);
