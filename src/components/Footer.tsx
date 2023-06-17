import React from "react";

const Footer = () => {
  return (
    <div className="w-full absolute bottom-0">
      <div className="p-3 bg-stone-100">India</div>
      <hr />
      <div className="flex justify-between p-3 bg-stone-100">
        <ul className="flex space-x-3">
          <li>About</li>
          <li>Advertising</li>
          <li>Business</li>
          <li>How Search works</li>
        </ul>
        <ul className="flex space-x-3">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
