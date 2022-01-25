import React from 'react';
import Link from 'next/link';

// import { Container } from './styles';

const Home: React.FC = () => {

  const [count, setCount] = React.useState(0);


  return (
    <div>
      <p>Home</p>

      <p>{count}</p>

      <Link href="/profile">
        <a data-cy="link-navigation">Profile</a>
      </Link>

      <button
        onClick={() => setCount(count + 1)}
        data-cy="btn-count"
      >Click Me</button>

    </div>
  );


}

export default Home;