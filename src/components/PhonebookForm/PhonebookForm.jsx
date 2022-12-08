import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import { Label, Button } from "./PhonebookForm.styled";
import styled from "styled-components";
import { addContact } from "redux/contactsSlice";
import { useDispatch } from "react-redux";

const InputName = styled(Field)`
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    &:hover, &:focus {
        border: 5px solid #81b9e7;
    }
`;

const FormEl = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    width: 300px;
    
    border: 5px solid rgb(241, 139, 245);
    border-radius: 10px;
`;

const initialValues = {
    id: "",
    name: "",
    number: "",
};

let schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required()
});

const PhonebookForm = () => {
    const dispatch = useDispatch();
    // const contacts = useSelector(getContacts);

    const handleSubmit = (values, {resetForm}) => {
        const contact = { id: nanoid(7), name: values.name, number: values.number };
        console.log(contact);
        dispatch(addContact(contact));
        resetForm();
    }

        return (
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
               <FormEl>
                    <Label htmlFor="name">
                        <span>Name</span>
                        <InputName
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
                        />
                        <ErrorMessage name="name" />
                    </Label>
                    <Label htmlFor="number">
                        <span>Number</span>
                        <InputName
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        <ErrorMessage name="number" />
                    </Label>
                    <Button type="submit">Add contact</Button>
                </FormEl>
            </Formik>
        )
}

PhonebookForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}

export default PhonebookForm;