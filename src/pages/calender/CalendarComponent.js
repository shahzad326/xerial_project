import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import emailjs from "emailjs-com";

const CalendarComponent = ({ onClose, onSelectDate }) => {
  const [date, setDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setDateError(""); // Clear date error when a new date is selected
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear email error when email is changed
  };

  const handleConfirm = async () => {
    try {
      let hasError = false;

      // Validate email
      if (!email.trim()) {
        setEmailError("Please enter a valid email.");
        hasError = true;
      }

      // Validate date
      if (!date) {
        setDateError("Please select a date.");
        hasError = true;
      }

      // If there is an error, stop further processing
      if (hasError) {
        return;
      }

      // Format the date in dd/mm/yyyy format
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      // Use Email.js to send an email directly from the frontend
      const templateParams = {
        user_email: email, // Use the provided email
        user_date: formattedDate,
        to_email: email, // Pass the user-entered email to the 'to' field
      };

      // Replace these with your actual Email.js service, template, and user IDs
      await emailjs.send(
        "service_pgp6djo",
        "template_21lh2gf",
        templateParams,
        "Q92zMlUNGnruPqjrV"
      );

      // Proceed with confirmation
      onSelectDate({ email, date });
      onClose();
    } catch (error) {
      console.error("Error confirming and sending email:", error);
      // Handle errors as needed
    }
  };

  const mailInputStyle = {
    padding: "10px",
    margin: "10px 0",
    width: "30%",
    boxSizing: "border-box",
  };

  return (
    <div className="calendar-modal">
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} />
        <input
          type="email"
          style={mailInputStyle}
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        {emailError && <div className="error-message">{emailError}</div>}
        {dateError && <div className="error-message">{dateError}</div>}
        <button onClick={handleConfirm} className="btn btn-primary mt-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CalendarComponent;
