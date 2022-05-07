/** @format */

import React from 'react';
import { useStore } from '../store/Store';
import { addBooking } from '../store/bookTableReducer';

export function BookingForm() {
  const [, dispatch] = useStore();
  const bookingFactory = ({ name, number, date, price }) => ({
    id: new Date().getUTCMilliseconds(),
    name,
    number,
    price,
    date,
  });

  const [form, setForm] = React.useState({
    name: '',
    number: '',
    date: '',
    price: '',
  });

  const handleInputOnChange = ({ currentTarget: { name, value } }) =>
    setForm((prop) => ({ ...prop, [name]: value }));

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
        <label htmlFor='name'>Full Name</label>
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
        <label htmlFor='number'>Number</label>
        <input
          style={formStyle.input}
          type='number'
          id='number'
          name='number'
          onChange={handleInputOnChange}
          value={form.number}
        />
      </div>
      <div style={formStyle.formControl}>
        <label htmlFor='date'>Date</label>
        <input
          style={formStyle.input}
          type='datetime-local'
          id='date'
          name='date'
          onChange={handleInputOnChange}
          value={form.date}
        />
      </div>
      <div style={formStyle.formControl}>
        <label htmlFor='price'>Price</label>
        <input
          style={formStyle.input}
          type='range'
          id='price'
          name='price'
          onChange={handleInputOnChange}
          value={form.price}
        />
      </div>

      <button type='button' onClick={handleOnBookATable}>
        Add your book
      </button>
    </div>
  );
}
