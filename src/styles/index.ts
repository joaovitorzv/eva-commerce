import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #E11383;
    --color-primary-dark: #0C0D0D;
    --color-primary-light: #FDFDFD;  

    --gray: #3C3E40;
    --gray-light: #DADFEB;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  html,
  body {
    font-family: 'Roboto', sans-serif;
    color: var(--color-primary-light);
  }

  h2 {
    font-weight: 300;
    font-size: 16px;
  }

  h3 {
    font-weight: 700;
    font-size: 32px;
  }

  h4 {
    font-weight: 400;
    font-size: 24px;
  }

  a {
    font-weight: 300;
    text-decoration: none;
    color: var(--color-primary-light)
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 8px;
  border-radius: 4px;

  background-color: var(--color-primary-light);

  svg {
    color: var(--color-primary-dark);
  }
`;

export const Input = styled.input`
  height: 32px;
  font-size: 16px;
  
  border: none;
  border-bottom: 1px solid var(--gray-light);

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: var(--gray);
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: var(--gray);
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: var(--gray);
  }
  :-moz-placeholder { /* Firefox 18- */
    color: var(--gray);
  }
`;