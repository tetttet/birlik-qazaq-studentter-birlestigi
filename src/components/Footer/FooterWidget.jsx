import React from 'react';

function FooterWidget({ title, children }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="font-semibold text-gray-700 text-lg mb-2">{title}</h2>
      <nav className="list-none space-y-2">{children}</nav>
    </div>
  );
}

export default FooterWidget;

