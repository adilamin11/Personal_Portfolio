import React from 'react'

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
      &copy; {new Date().getFullYear()}. All rights reserved by Adil Rather
      </p>
    </div>
  );
}

export default FooterBottom