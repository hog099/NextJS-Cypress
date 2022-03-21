import styled from 'styled-components';
// import media from "styled-media-query";


export const Container = styled.div`
  &&{
    width: 100%;
    height: 60px;
    background: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  &&{
    font-size: 22px;
    color: var(--shape);
  }
`;
