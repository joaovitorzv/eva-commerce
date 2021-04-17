import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';

import { ReactComponent as EmailIcon } from '../../assets/svg/newsletter.svg';
import { Input, PrimaryButton, ErrorText } from '../../styles';

import {
  Container,
  NewsletterInfo,
  Form,
  InputsContainer,
  NewsletterInputWrapper,
  NewsletterSuccess
} from './styles';

interface INewsletterValues {
  name: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Nome precisa de 3 caracteres').required('Nome obrigatório'),
  email: Yup.string().email('Digite um email valido').required('Email obrigatório')
})

const Newsletter: React.FC = () => {
  const [newsletterRecipient, setNewsletterRecipient] = useState('')

  return (
    <Container>
      <NewsletterInfo>
        <EmailIcon />
        <h4>Receba nossas novidades, descontos e muito mais</h4>
      </NewsletterInfo>

      {newsletterRecipient ? (
        <NewsletterSuccess>
          <p>Você receberá atualizações no seu email <strong>{newsletterRecipient}</strong></p>
        </NewsletterSuccess>
      ) : (
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: '',
            email: ''
          }}
          onSubmit={(values: INewsletterValues) => {
            setNewsletterRecipient(values.email)
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values, touched, isSubmitting, errors }) => (
            <Form onSubmit={handleSubmit}>
              <InputsContainer>
                <div className='input-container'>
                  {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
                  <NewsletterInputWrapper
                    className={cn({ 'error': !!errors.name && touched.name })}
                  >
                    <Input
                      placeholder='Digite seu nome'
                      name='name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </NewsletterInputWrapper>
                </div>

                <div className='input-container'>
                  {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
                  <NewsletterInputWrapper
                    className={cn({ 'error': !!errors.email && touched.email })}
                  >
                    <Input
                      placeholder='Digite seu email'
                      name='email'
                      type='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </NewsletterInputWrapper>
                </div>
              </InputsContainer>

              <PrimaryButton type='submit'>
                Eu quero receber novidades!
          </PrimaryButton>
            </Form>
          )}
        </Formik>
      )}
    </Container>
  );
}

export default Newsletter;