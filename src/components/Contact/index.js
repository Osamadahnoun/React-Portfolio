import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formState);
  // };

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_sq4u8bc", form.current, "Tj9Ng1WyJrJQ_ZZCK")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setFormState({ name: "", email: "", message: "" });
    showResult(true);
  };

  // hide success message
  setTimeout(() => {
    showResult(false);
  }, 20000);

  const handleChange = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  return (
    <div className="center">
      <div className="form-container">
        <section className="form">
          <h1>Contact me</h1>
          <p>
            Feel free to contact me however you'd like. You can use this form or
            my contact info below (Click on the phone icon).
          </p>
          <form className="contact" onSubmit={sendEmail} ref={form}>
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <br />
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                name="message"
                rows="5"
                defaultValue={message}
                onBlur={handleChange}
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit">Submit</button>
            <p>
              {result
                ? `Message successfully sent! I will get back to you as soon as possible!`
                : null}
            </p>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
