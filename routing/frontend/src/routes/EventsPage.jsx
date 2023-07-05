import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

export function EventsPage() {
  const data = useLoaderData();

  return <EventsList events={data} />;
}

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (response.ok) {
    const resData = await response.json();
    return resData.events;
  } else {
    // throw new Response(JSON.stringify({ message: 'Could not fetch events' }), { status: 500 });
    return json({ message: 'Could not fetch events' }, { status: 500 });
  }
};
