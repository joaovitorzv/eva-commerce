import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-dark: #BA0668;
    --primary: #E11383;
    --primary-light: #FF3BA5;

    --secondary-dark: #6526BF;
    --secondary: #8C3BFF;
    --secondary-light: #A566FF;

    --black: #0C0D0D;
    --black-2: #3C3E40;
    --black-3: #3C3E40;

    --white: #FDFDFD;  
    --white-1: #F7FAFF;
    --white-2: #DADFEB;
    
    --success: #62CB3E;
    --error: #CB3E3E;
    --warning: #EFD444;
    --info: #3EA7CB;
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
    color: var(--white);
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
    color: var(--white)
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 8px;

  border-radius: 4px;
  border: 1px solid transparent;
  background-color: var(--white);

  svg {
    color: var(--black);
  }
`;

export const Input = styled.input`
  height: 32px;
  font-size: 16px;
  
  border: none;
  border-bottom: 1px solid var(--white-2);

  width: 100%;

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: var(--black-3);
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: var(--black-3);
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: var(--black-3);
  }
  :-moz-placeholder { /* Firefox 18- */
    color: var(--black-3);
  }
`;

export const LinkOption = styled.a`
  display: flex;
  align-items: center;
  
  cursor: pointer;

  svg {
    margin-left: 5px;
  }
`;

export const PrimaryButton = styled.button`
  padding: 10px 30px;
  
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 8px;

  font-size: 16px;
  
  cursor: pointer;
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: var(--white-2);
`;