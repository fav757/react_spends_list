import styled from 'styled-components';

const GraphControllsStyles = {
  Bar: styled.div`
    width: 100%;
    height: 43px;
    background: #23232d;
    border-radius: 43px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    color: inherit;

    :hover div:first-child {
      transition: 1s;
      transform: translateX(100%);
    }
  `,

  HiddingSector: styled.div`
    background: inherit;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
  `,

  Choose: styled.button`
    color: white;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1rem;
    border-radius: 24px;
    background: #97124a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
  `,

  VisibleSector: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  `,

  Fone: styled.div`
    background: inherit;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    border-radius: 1rem;
  `,

  Button: styled.button`
    color: inherit;
    padding: 0.5rem 1rem;
    border-radius: 24px;
    background: #97124a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    cursor: pointer;
  `,
};

export default GraphControllsStyles;
