import React from 'react';
import EventItem from '../components/EventItem';
import { json, useRouteLoaderData } from 'react-router-dom';

export const EventDetailPage = () => {
  const data = useRouteLoaderData('evemt-detail');
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export const loader = async ({ req, params }) => {
  const res = await fetch(`http://localhost:8080/events/${params.id}`);

  if (!res.ok) {
    return json({ message: 'Could not fetch details' }, { status: 500 });
  } else {
    return res;
  }
};
