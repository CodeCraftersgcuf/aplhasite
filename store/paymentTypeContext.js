import React, { createContext, useState } from 'react';

// Create the Context
const RadioContext = createContext({
  selectedPaymentOption: '',
  setSelectedPaymentOption: () => {},
});

// Create the Provider Component
export function RadioProvider({ children }) {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');

  return (
    <RadioContext.Provider
      value={{ selectedPaymentOption, setSelectedPaymentOption }}
    >
      {children}
    </RadioContext.Provider>
  );
}

export function useRadio() {
  return React.useContext(RadioContext);
}
