import styled from 'styled-components';

const ButtonsStyles = {
  Button: styled.button`
    flex: 1;
    color: inherit;
    padding: 0.5rem 1rem;
    border-radius: 24px;
    background: #97124a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    cursor: pointer;

    &[data-isActive='true'] {
      text-shadow: 0 0 5px #f3b9d1;
    }

    :first-child {
      margin-right: 1rem;
    }

    :hover {
      transform: scale(1.05);
    }
  `,
};

export default ButtonsStyles;
