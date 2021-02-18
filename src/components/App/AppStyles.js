import styled from 'styled-components';

const AppStyles = {
  Header: styled.header`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  `,

  Main: styled.main`
    min-height: calc(100vh - 227px);
    padding-bottom: 2rem;

    > *:not(:last-child) {
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 576px) {
      main {
        min-height: calc(100vh - 128px);
      }
    }
  `,

  Footer: styled.footer`
    text-align: center;

    a {
      color: #c8c8c8;
    }
  `,
};

export default AppStyles;
