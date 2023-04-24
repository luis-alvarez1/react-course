import React, { useEffect, useState } from 'react';
import PageContent from '../components/PageContent.jsx';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation.jsx';

export const Error = () => {
  const error = useRouteError();

  const [title, setTitle] = useState('An error ocurred');
  const [message, setMessage] = useState('Something went wrong');

  useEffect(() => {
    if (error.status === 500) {
      const data = JSON.parse(error.data);
      setMessage(data.message);
    }
    if (error.status === 404) {
      setTitle('Not found');
      setMessage('Could not find page');
    }
  }, [error]);

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};
