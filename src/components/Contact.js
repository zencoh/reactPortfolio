import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const verify = document.querySelector(".verify");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");
  const [state, handleSubmit] = useForm("xjvdzvaj");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function checkValues() {
    if (name === "" || email === "" || message === "") {
      verify.innerHTML = "Please enter all information.";
      nameField.value = "";
      emailField.value = "";
      messageField.value = "";
      return;
    } else {
      handleSubmit();
    }
  }
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="contact">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={setName}
          id="name"
          type="name"
          name="name"
          placeholder="Name..."
        />
        <input
          onChange={setEmail}
          id="email"
          type="email"
          name="email"
          placeholder="Email..."
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          onChange={setMessage}
          id="message"
          name="message"
          placeholder="Message..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="btn"
          type="submit"
          disabled={state.submitting}
          onClick={checkValues}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
