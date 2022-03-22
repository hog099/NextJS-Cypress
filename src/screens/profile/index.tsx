import React from 'react';
import { Header } from '../../components/header';

import { Container, Content } from './styles';

const Profile: React.FC = () => {


  const handleSubmit = (e: any) => {
    e.preventDefault();




  }

  

  return (
    <div>
      <Header />
      <Container>
        <Content>
          <p>Formulario</p>

          <form onSubmit={handleSubmit}>


          </form>

        </Content>
      </Container>
    </div>
  );


}

export default Profile;