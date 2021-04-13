import React from 'react';

import { ReactComponent as EmailIcon } from '../../assets/svg/newsletter.svg'

import { Input, PrimaryButton } from '../../styles'

import {
  Container,
  NewsletterInfo,
  Form,
  InputContainer,
  NewsletterInputWrapper
} from './styles';

const Newsletter: React.FC = () => {
  return (
    <Container>
      <NewsletterInfo>
        <EmailIcon />
        <h4>Recebe nossas novidades, descontos e muito mais</h4>
      </NewsletterInfo>

      <Form>
        <InputContainer>
          <NewsletterInputWrapper>
            <Input placeholder='Digite seu nome' />
          </NewsletterInputWrapper>

          <NewsletterInputWrapper>
            <Input placeholder='Digite seu email' />
          </NewsletterInputWrapper>
        </InputContainer>

        <PrimaryButton>
          Eu quero receber novidades!
        </PrimaryButton>
      </Form>
    </Container>
  );
}

export default Newsletter;