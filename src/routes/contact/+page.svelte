<!-- src/Contact.svelte -->

<script>
  // Optional: add form submission logic here
</script>

<header>
  <div class="logo"></div>
  <nav>
    <a href="/project2/">Home</a>
    <a href="/project2/shop">Shop</a>
    <a href="/project2/contact">Contact</a>
  </nav>
</header>

<main>
  <section class="contact">
    <h1>Contact Us</h1>
    <form class="contact-form">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Your Name" required />

      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Your Email" required />

      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" placeholder="Your Phone Number" required />

      <label for="message">Message</label>
      <textarea id="message" placeholder="Your Message" required></textarea>

      <div class="form-buttons">
        <button type="button" class="cancel">Cancel</button>
        <button type="submit" class="submit">Submit</button>
      </div>
    </form>
  </section>
</main>

<style>
  :global(body) {
    background-color: #333;
    color: #f1f1f1;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #1a1a1a;
  }

  .logo {
    width: 100px;
    height: 30px;
    background-color: #e0e0e0;
    border-radius: 5px;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin-left: 1.5rem;
  }

  nav a:hover {
    text-decoration: underline;
  }

  main {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  .contact {
    width: 100%;
    max-width: 600px;
    background-color: #444;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .contact h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .contact-form label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1.5rem;
    border: none;
    border-radius: 5px;
    background-color: #555;
    color: #fff;
    font-size: 1rem;
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: #ddd;
  }

  .contact-form textarea {
    resize: vertical;
    min-height: 100px;
  }

  .form-buttons {
    display: flex;
    justify-content: space-between;
  }

  .form-buttons .cancel,
  .form-buttons .submit {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
  }

  .form-buttons .cancel {
    background-color: #777;
  }

  .form-buttons .submit {
    background-color: #666;
  }

  .form-buttons .cancel:hover {
    background-color: #888;
  }

  .form-buttons .submit:hover {
    background-color: #777;
  }
</style>