import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, subject, message }) => {
  return (
    <Html>
      <Head />
      <Preview>C&apos;est un message de portfolio!</Preview>
      <Body className="bg-gray-100 text-gray-900">
        <Container className="bg-white rounded-lg shadow p-6">
          <Heading className="text-xl font-bold mb-4">Sujet: {subject}</Heading>
          <Text className="mb-4">🐺: {name}</Text>
          <Text className="mb-4">🔗 : {email}</Text>
          <Text className="mb-4">⚡: {message}</Text>
          </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;