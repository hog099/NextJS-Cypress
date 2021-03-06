import styled from 'styled-components';
// import media from "styled-media-query";


export const Container = styled.div`
  &&{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
`;


export const ContentCount = styled.div`
  &&{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
      margin: 5px 0;
      font-size: 30px;
    }
    button{
      width: 100px;
      height: 30px;
      margin: 5px 0;
      border: none;
      background: #e5e5e5;
      padding: 5px;
      border-radius: 3px;
    }
  }
`;

