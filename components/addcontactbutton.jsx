import React from 'react';

const AddContactButton = () => {
  return (
    <>
      <a href="tel:+972526920346" aria-label="התקשר עכשיו" className="tracking-tight cursor-pointer md:hidden">
        <span>התקשר עכשיו</span>
      </a>
      <a href="#contact" aria-label="השאר פרטים" className="tracking-tight cursor-pointer hidden md:inline">
        <span>התקשר עכשיו</span>
      </a>
    </>
  );
};

export default AddContactButton;
