import React from 'react';
import Header from './Header'; // Import Header component

function Layout({ children }) {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      {children}
    </div>
  );
}

export default Layout;

