/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const CookieBanner = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
    alert("Cookies Accepted!");
  };

  const handleRejectCookies = () => {
    setCookiesAccepted(false);
    alert("Cookies Rejected!");
  };

  return (
    <div className="flex justify-center">
      <button
        className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
        onClick={handleAcceptCookies}
        disabled={cookiesAccepted}
      >
        Accept Cookies
      </button>
      <button
        className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
        onClick={handleRejectCookies}
        disabled={cookiesAccepted}
      >
        Reject Cookies
      </button>
    </div>
  );
};

export default CookieBanner;
