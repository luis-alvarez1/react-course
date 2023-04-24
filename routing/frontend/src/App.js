// Challenge / Exercise

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './routes/HomePage';
import { EventsPage, loader as eventLoader } from './routes/EventsPage';
import { EventDetailPage } from './routes/EventDetailPage';
import { NewEventPage } from './routes/NewEventPage';
import { EditEventPage } from './routes/EditEventPage';
import { MainContentWrapper } from './routes/MainContentWrapper';
import { EventsContentWrapper } from './routes/EventsContentWrapper';
import { Error } from './routes/Error';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainContentWrapper />,
      errorElement: <Error />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events',
          element: <EventsContentWrapper />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventLoader,
            },
            { path: 'new', element: <NewEventPage /> },
            { path: ':id', element: <EventDetailPage /> },
            { path: ':id/edit', element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
