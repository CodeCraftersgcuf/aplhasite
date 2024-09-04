// src/store/localStorageMiddleware.js

// Middleware function
export const localStorageMiddleware = (store) => (next) => (action) => {
  // Pass the action to the next middleware/reducer
  const result = next(action);

  // Get the updated state after reducers have processed the action
  const state = store.getState();

  // Save specific parts of the state to localStorage
  localStorage.setItem('cartItems', JSON.stringify(state.itemsFn.items));

  return result; // Return the result of next(action)
};

// Function to load state from localStorage
export const rehydrateState = () => {
  try {
    const serializedState = localStorage.getItem('cartItems');
    if (serializedState === null) {
      return undefined; // Let reducers initialize the state
    }
    return JSON.parse(serializedState); // Parse and return the saved state
  } catch (err) {
    console.log('Could not load state from localStorage:', err);
    return undefined;
  }
};
