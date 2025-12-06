import React from 'react'
import logo from "../../image/logo.jpg"

const Footer = () => {
  return (
    <><div className="w-full bg-[#e9edf4] py-12 px-4">
  <div className="max-w-5xl mx-auto text-center">

    {/* LOGO */}
    <img
      src={logo}
      alt="Omaxe Logo"
      className="mx-auto w-36 mb-6"
    />

    {/* MAIN TEXT */}
    <p className="font-semibold text-lg">
      This project is RERA registered. | Project RERA Number : DLRERA2024P0003
    </p>

    <p className="mt-4 text-gray-700 leading-relaxed">
      <span className="font-semibold">Disclaimer :</span> Please be advised that this website is not an
      official site and serves solely as an informational portal managed by a RERA authorized real estate
      agent. It does not constitute an offer or guarantee of any services. The prices displayed on this
      website are subject to change without prior notice, and the availability of properties cannot be
      guaranteed. The images showcased on this website are for representational purposes only and may not
      accurately reflect the actual properties. We may share your data with Real Estate Regulatory
      Authority (RERA) registered Developers for further processing as necessary. Additionally, we may
      send updates and information to the mobile number or email address registered with us. All rights
      reserved. The content, design, and information on this website are protected by copyright and other
      intellectual property rights. Any unauthorized use or reproduction of the content may violate
      applicable laws. For accurate and up-to-date information regarding services, pricing, availability,
      and any other details, it is recommended to contact us directly through the provided contact
      information on this website. Thank you for visiting our website.
    </p>

    <p className="font-semibold mt-6">
      All Rights Reserved. © 2025 Omaxe Dwarka 19B Delhi | The Omaxe State Dwarka Delhi
    </p>

    {/* LINKS ROW */}
    <div className="flex justify-center gap-6 mt-6 text-gray-700">
      <button className="hover:underline">Disclaimer</button>
      <button className="hover:underline">Privacy Policy</button>
      <button className="hover:underline">Terms and Conditions</button>
    </div>

    {/* BOTTOM LINE */}
    <div className="w-full border-t mt-8 pt-4 text-gray-600 text-sm">
      ©2025 Primeestates, All Rights & Reserved | Created By{" "}
      <a href="#" className="text-blue-700 hover:underline">Marketingrockers</a>
    </div>

  </div>
</div>
</>
  )
}

export default Footer