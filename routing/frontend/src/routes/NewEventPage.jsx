import React from 'react';
import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';

export const NewEventPage = () => {
  return (
    <>
      <EventForm />
    </>
  );
};

export const action = async ({ req }) => {
  const data = await req.formData();
  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };
  const res = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  });

  if (!res.ok) {
    throw json({ message: 'Could not sent the data' }, { status: 500 });
  }

  return redirect('/events');
};
