import React, { useState } from 'react';
import { FieldValues, set } from 'react-hook-form';
import {
  Form,
  FormContent,
  FormInput,
  FormOptions
} from '../../components/dist';

interface ContactFormProps {
  form: Partial<FormOptions>;
  inputs: FormInput[];
}

interface ContactFormInput {
  description: string;
  email: string;
  location: string;
  name: string;
  signup: string;
  subject: string;
  terms: boolean;
}

const contactFormDefaults: ContactFormInput = {
  description: '',
  email: '',
  location: '',
  name: '',
  signup: '',
  subject: '',
  terms: true
};

export function ContactForm(props: ContactFormProps) {
  const { form, inputs } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const onSubmit = async (data: FieldValues) => {
    // Todo: code modularization
    setIsLoading(true);
    try {
      const res  =  await fetch('/api/sfcc', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const newdata = await res.json();
      console.log('New Data', newdata);
      setMessage("Case Created Successfully");
    } catch (error) {
      setMessage("An unexpected problem occured while creating case please try again later.");
      console.error('An unexpected error occurred:', error);
    } finally {

      setIsLoading(false);

      const timer = setTimeout(() => {
        setMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  };

  return (
    <>
      <Form {...form}>
        <FormContent
          defaultValues={contactFormDefaults}
          inputs={inputs}
          onSubmit={onSubmit}
        />
      </Form>
      {isLoading && <p>Loading...</p>}
      {message && <p>{message}</p>}
    </>
  );
}