import styled from 'styled-components';

import { InputWrapper } from '../../styles'

export const Container = styled.section`
  width: 100%;
  background-color: var(--black-3);

  margin-top: 80px;
  padding: 3rem;

  @media (max-width: 820px) {
    padding: 3rem 2rem;
  }
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
    padding: 2rem 0;

    h4 {
      font-size: 18px;
    }
  }
`;

export const Form = styled.form`
  width: 50%;
  margin: 0 auto;

  text-align: center;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;  

  margin-bottom: 3rem;

  .input-container {
    width: 49%;
    height: 60px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    .error {
      border: 1px solid var(--primary);
    }

    p {
      padding-left: 10px;
    }
  }


  @media (max-width: 1250px) {
    flex-direction: column;
  }

  @media (max-width: 1250px) {
    .input-container {
      width: 100%;

      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`;

export const NewsletterInputWrapper = styled(InputWrapper)`
  width: 100%;
`;

export const NewsletterSuccess = styled.div`
  text-align: center;
  font-size: 24px;
  color: var(--success);

  strong {
    color: var(--white-2);
  }

  @media (max-width: 820px) {
    font-size: 18px;
  }
`;