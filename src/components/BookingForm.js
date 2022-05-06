/** @format */

import React from 'react';
import { useStore } from '../store/Store';
import { addBooking } from '../store/bookTableReducer';

const BookingForm = () => {
  const [, dispatch] = useStore();
  const bookingFactory = ({
    name,
    numberOfPeople,
    dateTime,
    numberOfContact,
  }) => ({
    id: new Date().getUTCMilliseconds(),
    name,
    numberOfPeople,
    dateTime,
    numberOfContact,
  });

  const [form, setForm] = React.useState({
    name: '',
    numberOfPeople: '',
    dateTime: '',
    numberOfContact: '',
  });

  const handleInputOnChange = ({ currentTarget: { name, value } }) =>
    setForm((state) => ({ ...state, [name]: value }));

  const handleOnBookATable = () => {
    dispatch(addBooking(bookingFactory(form)));
  };

  const formStyle = {
    container: {
      border: '2px solid',
      borderRadius: '20px',
      padding: '20px',
      margin: 'auto',
      width: '25%',
      backgroundColor: '#D9DDFF',
    },
    formControl: {
      margin: '20px',
    },
    input: {
      marginLeft: '15px',
    },
  };

  return (
    <div style={formStyle.container}>
      <h2>Add books</h2>
      <div style={formStyle.formControl}>
        <label htmlFor='name'>Full name</label>
        <input
          style={formStyle.input}
          type='text'
          id='name'
          name='name'
          onChange={handleInputOnChange}
          value={form.name}
        />
      </div>
      <div style={formStyle.formControl}>
        <label htmlFor='numberOfContact'>phone number</label>
        <input
          style={formStyle.input}
          type='text'
          id='numberOfContact'
          name='numberOfContact'
          onChange={handleInputOnChange}
          value={form.numberOfContact}
        />
      </div>
      <div style={formStyle.formControl}>
        <label htmlFor='numberOfPeople'>age</label>
        <input
          style={formStyle.input}
          type='number'
          id='numberOfPeople'
          name='numberOfPeople'
          onChange={handleInputOnChange}
          value={form.numberOfPeople}
        />
      </div>
      <div style={formStyle.formControl}>
        <label htmlFor='numberOfPeople'>Date</label>
        <input
          style={formStyle.input}
          type='date-local'
          id='date'
          name='date'
          onChange={handleInputOnChange}
          value={form.dateTime}
        />
      </div>

      <button type='button' onClick={handleOnBookATable}>
        add books
      </button>
    </div>
  );
};

export default BookingForm;
