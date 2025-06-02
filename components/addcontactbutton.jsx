'use client';
import React from 'react';

const AddContactButton = () => {
  const contact = {
    firstName: "א.ל",
    lastName: "שירותים ניידים מפוארים",
    phone: "+972526525185",
    email: "shirutim4u@gmail.com",
    photoURL: "/images/ollogo.png"
  };

  const generateVCard = (contact, photoURL) => {
    return [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${contact.lastName};${contact.firstName};;;`,
      `FN:${contact.firstName} ${contact.lastName}`,
      `TEL;TYPE=CELL:${contact.phone}`,
      `EMAIL:${contact.email}`,
      `PHOTO;VALUE=URL;TYPE=PNG:${photoURL}`,
      'END:VCARD',
    ].join('\n');
  };

  const downloadVCard = (vCardContent, filename) => {
    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleClick = (e) => {
    e.preventDefault();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const vCard = generateVCard(contact, contact.photoURL);
      downloadVCard(vCard, 'al_shirutim_contact.vcf');
    } else {
      // במחשב — פשוט נגלול ל-#contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button onClick={handleClick} aria-label="שמור אותנו באנשי קשר" className="tracking-tight cursor-pointer">
      <span>התקשר עכשיו</span>
    </button>
  );
};

export default AddContactButton;
