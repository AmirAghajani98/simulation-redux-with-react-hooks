/** @format */

import React from 'react';
import { useStore } from '../store/Store';

export function BookingList() {
  const [state] = useStore();
  const { bookings } = state;
  const formStyle = {
    container: {
      border: '1px solid',
      borderRadius: '20px',
      padding: '20px',
      margin: 'auto',
      marginTop: '30px',
      width: '25%',
      backgroundColor: '#FF7676',
    },
    formControl: {
      margin: '10px',
    },
    input: {
      marginLeft: '11px',
    },
  };
  const Booking = ({ item }) => (
    <>
      <div key={item.id}>
        <div style={formStyle.formControl}>
          <b>Name:</b> {item.name}
        </div>
        <div style={formStyle.formControl}>
          <b>Number of Contact:</b> {item.number}
        </div>
        <div style={formStyle.formControl}>
          <b>prices:</b> {item.price}
        </div>
        <div style={formStyle.formControl}>
          <b>Date:</b> {new Date(item.date).toString()}
        </div>
        <hr />
      </div>
    </>
  );

  return (
    <div style={formStyle.container}>
      <h2>Bookings List</h2>
      {bookings.map((booking) => (
        <Booking key={booking.id} item={booking} />
      ))}
    </div>
  );
}
