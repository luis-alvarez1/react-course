import Counter from './components/Counter';

import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const MainContent = () => (
    <>
      <UserProfile />
      <Counter />
    </>
  );

  return (
    <>
      <Header />
      {isAuth ? <MainContent /> : <Auth />}
    </>
  );
}

export default App;
