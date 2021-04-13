import styled from 'styled-components';

import { InputWrapper } from '../../styles'

export const Container = styled.section`
  width: 100%;
  padding: 0 5rem;
  background-color: var(--gray);

  padding: 3rem;
`;

export const NewsletterInfo = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    fill: white;
    color: white;
    height: 48px;
    margin-bottom: 10px;
  }
`;

export const Form = styled.div`
  width: 50%;
  margin: 0 auto;

  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;  

  margin-bottom: 3rem;
`;

export const NewsletterInputWrapper = styled(InputWrapper)`
  width: 49%;
`;