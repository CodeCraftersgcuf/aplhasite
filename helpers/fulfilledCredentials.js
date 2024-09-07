const fulfilledCredentials = (credentials) => {
  if (
    credentials.email.trim() === '' ||
    credentials.address.trim() === '' ||
    credentials.city.trim() === '' ||
    credentials.firstName.trim() === '' ||
    credentials.lastName.trim() === '' ||
    credentials.phone.trim() === ''
  ) {
    return false; // If any field is empty, return false
  } else {
    return true;
  }
};

export default fulfilledCredentials;
