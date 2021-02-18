import styled from 'styled-components';

const UserInputStyles = {
  Container: styled.div`
    display: flex;
    position: relative;
    align-items: center;
    padding-bottom: 2rem;
  `,

  Input: styled.input`
    padding-bottom: 2rem;
    background: #23232d;
    border-radius: 24px;
    font-size: 1rem;
    width: 100%;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    color: inherit;

    :focus {
      box-shadow: 0 0 5px #d61f6c;
    }

    ::placeholder {
      color: #c8c8c8;
    }
  `,

  IconsWrap: styled.div`
    position: absolute;
    right: 0;
    margin-right: 0.4rem;
  `,

  Icon: styled.i`
    margin: 0 0.4rem;
    cursor: pointer;

    :hover {
      transform: scale(1.2);
    }
  `,
};

export default UserInputStyles;
