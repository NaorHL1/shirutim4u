'use client';
import React from 'react';

const AddContactButton = () => {
  const contact = {
    firstName: "א.ל",
    lastName: "שירותים ניידים מפוארים",
    phone: "+972526525185",
    email: "shirutim4u@gmail.com",
    photoURL: "/images/logo50kb.jpeg"
  };

  const generateVCard = (contact, base64Photo) => {
    return [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${contact.lastName};${contact.firstName};;;`,
      `FN:${contact.firstName} ${contact.lastName}`,
      `TEL;TYPE=CELL:${contact.phone}`,
      `EMAIL:${contact.email}`,
      `PHOTO;ENCODING=b;TYPE=PNG:${base64Photo}`,
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

  const handleClick = async (e) => {
    e.preventDefault();

    const response = await fetch(contact.photoURL);
    const blob = await response.blob();

    const base64Photo = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]); // רק את base64
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // פה הייתה הבעיה - נשתמש ב-base64Photo ולא ב-contact.photoURL
      const vCard = generateVCard(contact, base64Photo);
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
