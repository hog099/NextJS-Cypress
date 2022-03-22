import React from 'react';
import Link from 'next/link';
import { Header } from '../../components/header';

import { Container, ContentCount } from './styles';

const Home: React.FC = () => {

  const [count, setCount] = React.useState(0);


  return (
    <>
      <Header />
      <Container>

        <div style={{ height: 10 }} />

        <Link href="/profile">
          <a data-cy="link-navigation">Ir para Perfil</a>
        </Link>

        <div style={{ height: 50 }} />

        <ContentCount>
          <p>{count}</p>

          <button
            onClick={() => setCount(count + 1)}
            data-cy="btn-count"
          >Increment</button>

        </ContentCount>

      </Container>

    </>
  );


}

export default Home;