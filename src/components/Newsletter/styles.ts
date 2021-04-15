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
  text-align: center;

  svg {
    fill: white;
    color: white;
    height: 48px;
    margin-bottom: 10px;
  }

  @media (max-width: 1250px) {
    width: 80%;
  }

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const Form = styled.div`
  width: 50%;
  margin: 0 auto;

  text-align: center;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;  

  margin-bottom: 3rem;

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

export const NewsletterInputWrapper = styled(InputWrapper)`
  width: 49%;

  @media (max-width: 1250px) {
    width: 100%;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;