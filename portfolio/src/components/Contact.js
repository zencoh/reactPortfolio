function Contact() {
  return (
    <section className="contact">
      <form action="#" method="post">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" name="name" required/>
            <div class="invalid-feedback">
              {/* Enter your name. */}
            </div>
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" name="email" required/>
            <div class="invalid-feedback">
              {/* Enter a valid email address. */}
            </div>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea class="form-control" id="message" name="message" rows="10" required></textarea>
            <div class="invalid-feedback">
              {/* Enter your message. */}
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
