import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';
import { changeDataSector } from '../../RootActions';

const StyledBar = styled.div`
  width: 100%;
  height: 43px;
  background: #23232d;
  border-radius: 43px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  color: inherit;

  :hover .hiding-sector {
    transition: 1s;
    transform: translateX(100%);
  }

  .hiding-sector {
    background: inherit;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .button {
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
  }

  .fone {
    background: inherit;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    border-radius: 1rem;
  }

  .visible-sector {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const StyledButton = styled.button`
  color: inherit;
  padding: 0.5rem 1rem;
  border-radius: 24px;
  background: #97124a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  cursor: pointer;
`;

function GraphControlls() {
  const { dispatch } = useContext(GlobalState);
  const handleClick = (value) => {
    dispatch(changeDataSector(value));
  };

  return (
    <StyledBar>
      <div className='hiding-sector'>
        <div className='button'>Choose graph</div>
        <div className='fone'></div>
      </div>
      <div className='visible-sector'>
        <StyledButton onClick={() => handleClick('data table')}>
          Table
        </StyledButton>
        <StyledButton onClick={() => handleClick('line graph')}>
          Line
        </StyledButton>
        <StyledButton onClick={() => handleClick('pie graph')}>
          Pie
        </StyledButton>
      </div>
    </StyledBar>
  );
}

export default GraphControlls;
