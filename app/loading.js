import React from 'react';
import '@/app/styles/spinner.scss';

const Loading = () => {
  return (
    <div className="fixed h-screen w-screen flex items-center justify-center">
      <span class="loader"></span>
    </div>
  );
};

export default Loading;
