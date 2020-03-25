/* eslint-disable */
import React from 'react';
import { RecurlyProvider, Elements, CardElement } from '@recurly/react-recurly';

export default function RecurlyExample() {
  return (
    <RecurlyProvider publicKey="MY_PUBLIC_KEY">
      <Elements>
        <PaymentForm />
      </Elements>
    </RecurlyProvider>
  );
}

function PaymentForm() {
  return (
    <form>
      <input type="text" data-recurly="first_name" placeholder="First name" />
      <input type="text" data-recurly="last_name" placeholder="Last name" />
      <CardElement />
    </form>
  );
}
