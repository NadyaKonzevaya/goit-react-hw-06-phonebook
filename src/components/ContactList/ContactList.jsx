import { List, Item, Button } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { getContacts, getFilter } from "redux/selectors";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    console.log(contacts);
    const filter = useSelector(getFilter);
    console.log(filter);

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        console.log(normalizedFilter);
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
    
    const filteredContacts = getFilteredContacts();
    console.log(filteredContacts);
    return (
        <List>
            {filteredContacts.map(contact => (<Item key={contact.id}>{contact.name}: {contact.number}
                <Button onClick={()=> dispatch(deleteContact(contact.id)) }>Delete</Button>
            </Item>))}
        </List>
    )

};

export default ContactList;