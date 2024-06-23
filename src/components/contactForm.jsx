/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PropTypes from "prop-types"

const Header = () => {
  return <h1 className="text-2xl font-bold mb-6 text-center pt-5">Send me an Email</h1>;
};

const Message = ({ name, email, onReset }) => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [messageSubmitted, setMessageSubmitted] = useState(false);

  const validate = () => message.length > 0;

  const handleBlur = () => {
    if (!validate()) {
      setErrorMessage("A message is required!");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    // Sending email using EmailJS
    emailjs.send(
      'service_ty7v9rm',    // Replace with your EmailJS service ID
      'template_z3jvakw',   // Replace with your EmailJS template ID
      {
        name: name,
        email: email,
        message: message,
      },
      'tauOOI0pT2cD5VmQP'         // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setMessageSubmitted(true);
    }).catch((err) => {
      console.error('FAILED...', err);
    });
  };

  if (messageSubmitted) {
    return <SubmitConfirm name={name} email={email} message={message} />;
  }

  return (
    <div className='shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110'>
      <Header />
      <div className="form-container p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
        <div className="user-info mb-4">
          <span className="icon ion-ios-person text-lg"></span>
          <span className="ml-2">{name}</span>
        </div>
        <div className="user-info mb-4">
          <span className="icon ion-ios-mail text-lg"></span>
          <span className="ml-2">{email}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-input mb-4 p-4 bg-gray-100 rounded-lg flex items-center">
            <span className="icon ion-md-create text-lg"></span>
            <textarea
              className="ml-2 w-full bg-transparent outline-none"
              value={message}
              placeholder="Write your message"
              rows="4"
              autoFocus
              onBlur={handleBlur}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <span className="error-message text-red-500 text-sm mb-4">{errorMessage}</span>
          <div className="flex justify-end space-x-2">
            <input
              type="button"
              value="Reset"
              onClick={onReset}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow cursor-pointer"
            />
            <input
              type="submit"
              value="Submit"
              disabled={!validate()}
              className={`px-4 py-2 rounded-lg shadow ${
                validate() ? 'bg-purple-700 text-white cursor-pointer' : 'bg-gray-300 text-gray-800 cursor-not-allowed'
              }`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const Email = ({ name, onReset }) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const validate = () => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email);

  const handleBlur = () => {
    if (!validate()) {
      setErrorMessage("A valid email address is required!");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setEmailSubmitted(true);
  };

  if (emailSubmitted) {
    return <Message name={name} email={email} onReset={onReset} />;
  }

  return (
    <div className='shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110'>
      <Header />
      <div className="form-container p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
        <div className="user-info mb-4">
          <span className="icon ion-ios-person text-lg"></span>
          <span className="ml-2">{name}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-input mb-4 p-4 bg-gray-100 rounded-lg flex items-center">
            <span className="icon ion-ios-mail text-lg"></span>
            <input
              type="email"
              value={email}
              placeholder="Please enter your email address"
              className="ml-2 w-full bg-transparent outline-none"
              autoFocus
              onBlur={handleBlur}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <span className="error-message text-red-500 text-sm mb-4">{errorMessage}</span>
          <div className="flex justify-end space-x-2">
            <input
              type="button"
              value="Reset"
              onClick={onReset}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow cursor-pointer"
            />
            <input
              type="submit"
              value="Next"
              disabled={!validate()}
              className={`px-4 py-2 rounded-lg shadow ${
                validate() ? 'bg-purple-700 text-white cursor-pointer' : 'bg-gray-300 text-gray-800 cursor-not-allowed'
              }`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const Name = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);

  const validate = () => name.length > 0;

  const handleBlur = () => {
    if (!validate()) {
      setErrorMessage("A name is required!");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setNameSubmitted(true);
  };

  if (nameSubmitted) {
    return <Email name={name} onReset={() => setNameSubmitted(false)} />;
  }

  return (
    <div className='bg-white shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110'>
      <Header />
      <div className="form-container p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-input mb-4 p-4 bg-gray-100 rounded-lg flex items-center">
            <span className="icon ion-ios-person text-lg"></span>
            <input
              type="text"
              value={name}
              placeholder="Please enter your name"
              className="ml-2 w-full bg-transparent outline-none"
              autoFocus
              onBlur={handleBlur}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <span className="error-message text-red-500 text-sm mb-4">{errorMessage}</span>
          <div className="flex justify-end space-x-2">
            <input
              type="submit"
              value="Next"
              disabled={!validate()}
              className={`px-4 py-2 rounded-lg shadow ${
                validate() ? 'bg-purple-700 text-white cursor-pointer' : 'bg-gray-300 text-gray-800 cursor-not-allowed'
              }`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const SubmitConfirm = ({ name, email, message }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-md mx-auto text-center transform transition-transform duration-300 ease-in-out hover:scale-110">
      <Header />
      <p className="submit-message text-lg text-purple-700">Thank you for reaching out!</p>
      <p>Your email has been submitted and we will be in touch with you shortly.</p>
      <h3 className="mt-4 text-xl font-semibold text-purple-700">Your Message:</h3>
      <div className="user-info my-4">
        <span className="icon ion-ios-person text-lg"></span>
        <small className="ml-2">{name}</small>
      </div>
      <div className="user-info my-4">
        <span className="icon ion-ios-mail text-lg"></span>
        <small className="ml-2">{email}</small>
      </div>
      <div className="user-info my-4">
        <span className="icon ion-ios-create text-lg"></span>
        <small className="ml-2">{message}</small>
      </div>
    </div>
  );
};

const FormApp = () => {
  return <Name />;
};

export default FormApp;
