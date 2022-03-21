import React from 'react';
import Link from 'next/link';
import { Header } from '../../components/header';

// import { Container } from './styles';

const Home: React.FC = () => {

  const [count, setCount] = React.useState(0);


  return (
    <>
      <Header />
      <p>Home</p>

      <p>{count}</p>

      <Link href="/profile">
        <a data-cy="link-navigation">Profile</a>
      </Link>

      <button
        onClick={() => setCount(count + 1)}
        data-cy="btn-count"
      >Click Me</button>

    </>
  );


}

export default Home;