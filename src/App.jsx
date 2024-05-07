import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
    termsAccepted: false,
    gender: "male",
    city: "city", // Add city state
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Input validation
    const { username, email, message, termsAccepted } = formData;
    if (!username || !email || !message || !termsAccepted) {
      setFormError("Please fill in all required fields and accept the terms.");
      return;
    }
    
    // Reset form state
    setFormSubmitted(true);
    setFormError(null);
    setFormData({
      username: "",
      email: "",
      message: "",
      termsAccepted: false,
      gender: "male",
      city: "city", // Reset city state
    });

    // Submit form data
    console.log(formData);
  };

  return (
    <div className="min-h-[100%] flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-lg p-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We'd love to hear from you.
          </p>
        </div>
        {formSubmitted ? (
          <div className="rounded-md bg-green-100 p-2">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Thank you for your message!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form className="mt-8 space-y-6 " onSubmit={submitHandler}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-md mb-3 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-md mb-3 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="appearance-none rounded-md relative  w-full flex items-center justify-between px-3 pr-2 pb-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                <div>
                  <h1 className="mb-3 w-full text-start">Select the gender</h1>
                  <div className="w-full flex items-start p-1">
                  <label htmlFor="male" className="mr-2">
                    Male
                  </label>
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <label htmlFor="female" className="ml-4 mr-2">
                    Female
                  </label>
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  </div>
                </div>

                <div className="flex items-start">
                    <select
                          value={formData.city}
                          className="py-2 border mt-4 border-gray-300"
                          onChange={(e) => handleChange({target: {name: "city", value: e.target.value}})}>
                          <option value="delhi">City</option>
                          <option value="delhi">Delhi</option>
                          <option value="pune">Pune</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="kolkata">Kolkata</option>
                    </select>
                </div>
              </div>

              
              
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="appearance-none rounded-md mt-3 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="termsAccepted"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the terms and conditions
              </label>
            </div>

            {formError && (
              <div className="rounded-md bg-red-100 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      {formError}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <button
              name="submit"
              value="submit"
              type="submit"
              className="py-2 px-4 bg-blue-400 mt-10 rounded-full"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
