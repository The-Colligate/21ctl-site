import React, { useState } from "react";
import JotformEmbed from "react-jotform-embed";
import { LightNavbar, Footer, SocialIcons } from "@components/layout/";
import Head from "next/head";

const Visitors = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Head>
        <title>Booking - 21 CTL</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicons/dea_favicon.ico" />
      </Head>

      <LightNavbar />

      <section className="mt-32">
        {!showForm ? (
          <div className="max-w-4xl m-auto py-10 sm:px-4 px-10">
            <p className="sm:text-xl text-base mb-8">
              Welcome to 21st Century Technologies. Before you proceed to book
              your visit, please carefully review the following terms and
              conditions:
            </p>

            <div className="pb-10">
              <ul className="space-y-10">
                <li className="booking-li">
                  <h2 className="sm:text-3xl text-xl font-bold">1. Privacy</h2>
                  <p className="sm:text-lg text-base leading-7 mt-2">
                  We understand that privacy online is important to users of our Site, especially when conducting business. This statement governs our privacy policies with respect to those users of the Site (“Visitors”) who visit without transacting business and Visitors who register to transact business on the Site and make use of the various services offered by 21st Century Technologies (collectively, “Services”) (“Authorized Customers”).
                  </p>
                </li>
                <li className="booking-li">
                  <h2 className="sm:text-3xl text-xl font-bold">2. Bookings</h2>
                  <p className="sm:text-lg text-base leading-7 mt-2">
                    Bookings can only be made through our web portal by
                    providing accurate and complete information. The booking
                    question is responsive, so please be specific.
                  </p>
                </li>
                <li className="booking-li">
                  <h2 className="sm:text-3xl text-xl font-bold">
                    3. Confirmation
                  </h2>
                  <p className="sm:text-lg text-base leading-7 mt-2">
                    Once you have made a booking, you will receive a
                    confirmation email from us. Please ensure that you provide a
                    valid email address, and check your spam folder in case the
                    confirmation email is not delivered to your inbox.
                  </p>
                </li>
                <li className="booking-li">
                  <h2 className="sm:text-3xl text-xl font-bold">
                    4. Cancellation
                  </h2>
                  <p className="sm:text-lg text-base leading-7 mt-2">
                    You may cancel your visit up to 48 hours before the
                    scheduled date and time. We will preference visitors within
                    the allotted time and for the reasons and premise upon this
                    booking made.
                  </p>
                </li>
                <li className="booking-li">
                  <h2 className="sm:text-3xl text-xl font-bold">
                    5. Rescheduling
                  </h2>
                  <p className="sm:text-lg text-base leading-7 mt-2">
                    You may reschedule your visit up to 24 hours before the
                    scheduled date and time, subject to availability.
                  </p>
                </li>
                <li className="booking-li">
                  <h2 className="sm:text-3xl text-xl font-bold">6. Age</h2>
                  <p className="sm:text-lg text-base leading-7 mt-2">
                    If your visitation will include Children under the working
                    age, you will need to explicitly engage us via email. Due to
                    the nature of facilities, Children may not be allowed on our
                    premises without adequate preparation.
                  </p>
                </li>
                <li className="booking-li">
                  <h2 className="sm:text-3xl text-xl font-bold">7. Conduct</h2>
                  <p className="sm:text-lg text-base leading-7 mt-2">
                    Visitors must behave respectfully and comply with the
                    instructions and regulations given by our staff. We reserve
                    the right to remove visitors who act inappropriately from
                    our premises.
                  </p>
                </li>
                <li className="booking-li">
                  <h2 className="sm:text-3xl text-xl font-bold">
                    8. Liability
                  </h2>
                  <p className="sm:text-lg text-base leading-7 mt-2">
                    We take all reasonable precautions to ensure the safety and
                    security of our visitors. However, we do not accept any
                    liability for loss, damage or injury to persons or property
                    that may occur during your visit.
                  </p>
                </li>
                <li className="booking-li">
                  <h2 className="sm:text-3xl text-xl font-bold">9. Changes</h2>
                  <p className="sm:text-lg text-base leading-7 mt-2">
                    We reserve the right to make changes to these terms and
                    conditions at any time without prior notice. Any changes
                    will be communicated to you via email and SMS.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <button
                onClick={() => setShowForm(true)}
                className="w-full h-20 p-4 bg-primary-blue"
              >
                <p className="sm:text-2xl text-base font-semibold text-white">
                  Yes, I agree to the terms and conditions
                </p>
              </button>
            </div>
          </div>
        ) : (
          <div className="">
            <JotformEmbed src="https://eu.jotform.com/230443968093058" oncontextmenu="return false"/>
          </div>
        )}
      </section>
    </>
  );
};

export default Visitors;
