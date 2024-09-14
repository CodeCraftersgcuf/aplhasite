import axios from 'axios';
import Cookies from 'js-cookie'; // Only for client-side access
import { stateActions } from '../slices/currentState';

// Middleware function
export const authMiddleware = (store) => (next) => async (action) => {
  const result = next(action);

  // Only run on the client side (browser)
  if (typeof window !== 'undefined') {
    if (action.type === 'auth/verifyToken') {
      const currentState = store.getState().stateFn.currentState;

      // Check if already logged in or logged out
      if (currentState === 'userLogin' || currentState === 'loggedOut') {
        return result;
      }

      try {
        // Retrieve the token from cookies (client-side)
        // const token = Cookies.get('token');
        // const cookiess = document.cookie;
        // console.log(cookiess);
        // // console.log('Token:', token); // Check if the token is retrieved correctly

        // if (!token) {
        //   // If no token, log out the user
        //   store.dispatch(stateActions.logout());
        //   return result;
        // }

        // Verify token with backend
        const response = await axios.post('/api/verify-token', { token: null });

        if (response.data && response.data.message === 'verified') {
          // If the token is valid, log the user in
          store.dispatch(stateActions.userLogin(response.data.email));
        } else {
          // If token is invalid, log out the user and remove token
          store.dispatch(stateActions.logout());
          Cookies.remove('token');
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        store.dispatch(stateActions.logout());
      }
    }
  }

  return result;
};
