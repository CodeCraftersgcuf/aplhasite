'use client';
export const getDeviceType = () => {
  if (typeof window !== 'undefined') {
    // Ensure this runs only on the client side
    const width = window.innerWidth;

    if (width < 768) {
      return 'mobile';
    } else if (width < 1024) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }
  return 'desktop'; // Default to 'desktop' on the server side
};
