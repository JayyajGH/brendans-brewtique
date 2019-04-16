<template>
  <main class="wrapper" id="main">
  <h1 class="heading1 heading--dark">Contact Us</h1>
  <section class="contact__details">
    <div class="contact-details__info">
      <section class="contact__section u-margin-bottom--large">
        <h2 class="heading2">Say Hi!</h2>
        <address>
          <div class="u-margin-bottom--medium">
            Email:
            <a href="mailto:beer@brendansbrewtique.co.uk" class="contact__link body--bold">beer@brendansbrewtique.co.uk</a>
          </div>
          <div class="u-margin-bottom--medium">
            Phone:
            <a href="tel:+441179831836" class="contact__link body--bold">0117 983 1836</a>
          </div>
            Visit:
            <a href="https://goo.gl/maps/5EkRMn5m1p82" target="_blank" rel="noopener noreferrer" class="contact__link body--bold">104-106 Queens Rd, Bristol BS8 1NF</a>
        </address>
      </section>
      <section class="contact__section u-margin-bottom--large">
        <h2 class="heading2">When can you buy beer?</h2>
        <table>
          <tr>
            <td class="opening__day">Mon-Thu</td>
            <td>10:00-19:00</td>
          </tr>
          <tr>
            <td class="opening__day">Fri</td>
            <td>11:00-22:00</td>
          </tr>
          <tr>
            <td class="opening__day">Sat</td>
            <td>11:00-22:00</td>
          </tr>
          <tr>
            <td class="opening__day">Sun</td>
            <td>Closed</td>
          </tr>
        </table>
      </section>
      <section class="contact__section u-margin-bottom--large">
        <h2 class="heading2">Stay in touch</h2>
        <p>
          Sign up to our monthly newsletter by clicking <a href="https://brendansbrewtique.us19.list-manage.com/subscribe?u=704d66e0eb5901577a660513a&id=35a1020e2a" target="_blank" rel="noopener noreferrer" class="newsletter__link body--bold">here</a>
        </p>
      </section>
    </div>
    <section class="contact-details__map u-margin-bottom--large">
      <h2 class="heading2">How to find us</h2>
      <iframe class="map" src="https://www.google.com/maps?q=104-106+Queens+road%0AClifton%0ABristol%0ABS8+1NF&output=embed&hl=en-GB&z=14" frameborder="0"></iframe>
    </section>
  </section>

  <section class="contact__section u-margin-bottom--large">
    <form id="js-contact-form" class="contact__form">
      <fieldset>
          <legend><h2 class="heading2">Send us a message</h2></legend>
      </fieldset>

      <div class="u-margin-bottom--medium">
        <label for="name">Name</label>
        <div>
          <input id="name" class="contact__field" type="text" minlength="1" maxlength="20" required>
        </div>
      </div>

      <div class="u-margin-bottom--medium">
        <label for="email">Email</label>
        <div>
          <input id="email" class="contact__field" type="email" minlength="1" maxlength="50" required>
        </div>
      </div>

      <div class="u-margin-bottom--medium">
        <label for="message">Message</label>
        <div>
          <textarea id="message" class="contact__field contact__message" rows="5" cols="20" maxlength="500" required></textarea>
        </div>
      </div>
      <input type="submit" class="button button--primary button-full-width body--bold" value="Send Message" @click.stop.prevent="doformstuff" />
<!--TODO: Add google recapture v3 to protect form -->
<!--TODO: Add honeypot field -->
    </form>
    <div id="js-contact-thankyou" class="contact__thankyou u-align--center" style="display: none">
      Thank you for your message.  We'll be in touch shortly
    </div>
  </section>

</main>
</template>

<script>
  export default {
    methods: {
      doformstuff() {
        document.getElementById('js-contact-form').style.display = 'none';
        document.getElementById('js-contact-thankyou').style.display = 'block';

        // https://501n7ggn65.execute-api.eu-west-1.amazonaws.com/dev
      }
    }
  }
</script>

<style>

.newsletter__link {
  color: var(--orange-dark);
}

.newsletter__link:hover {
  text-decoration: underline;
}

.contact__link {
  color: var(--orange-dark);
}

.contact__link:hover {
  text-decoration: underline;
}

.contact__details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.contact-details__map {
  width: 100%;
  padding: 10px;
}

@media (min-width: 50em) {
  .contact-details__map {
    width: 50%;
  }
}

.contact-details__info {
  width: 100%;
}

@media (min-width: 50em) {
  .contact-details__info {
    width: 50%;
  }
}

.contact__section {
  padding: 10px;
}

.map {
  width: 100%;
  height: 350px;
}

@media (min-width: 50em) {
  .map {
    height: 400px;
  }
}

.contact__form {
  width: 100%;
}

@media (min-width: 50em) {
  .contact__form {
    width: 40%;
  }
}

.contact__field {
  padding: 10px;
  width: 100%;
}

.contact__message {
  resize: none;
}


.contact__thankyou {
  background-color: var(--grey-base);
  color: var(--white);
  padding: 20px;
}

.opening__day {
  padding-right: 10px;
}
</style>
