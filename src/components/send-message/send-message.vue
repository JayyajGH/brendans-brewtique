<template>
  <div>
    <form id="js-contact-form" class="contact__form">
      <fieldset>
          <legend><h2 class="heading2">Send us a message</h2></legend>
      </fieldset>

      <div class="u-margin-bottom--medium">
        <label for="name">Name</label>
        <div>
          <input id="name" class="contact__field" type="text" minlength="1" maxlength="20" required v-model="contactName">
        </div>
      </div>

      <div class="u-margin-bottom--medium">
        <label for="email">Email</label>
        <div>
          <input id="email" class="contact__field" type="email" minlength="1" maxlength="50" required v-model="contactEmail">
        </div>
      </div>

      <div class="u-margin-bottom--medium">
        <label for="message">Message</label>
        <div>
          <textarea id="message" class="contact__field contact__message" rows="5" cols="20" maxlength="500" required v-model="contactMessage"></textarea>
        </div>
      </div>
      <input type="submit" class="button button--primary button-full-width body--bold" value="Send Message" @click.stop.prevent="sendContactMessage" />
  <!--TODO: Add google recapture v3 to protect form -->
  <!--TODO: Add honeypot field -->
    </form>
    <div id="js-contact-thankyou" class="contact__thankyou u-align--center" style="display: none">
      Thank you for your message.  We'll be in touch shortly
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SendMessage',
    data() {
      return {
        contactName: '',
        contactEmail: '',
        contactMessage: ''
      }
    },
    methods: {
      async sendContactMessage() {
        try {
          const message = {
              contactFromName: this.contactName,
              contactFromAddress: this.contactEmail,
              subject: 'Website contact request',
              message: this.contactMessage
          };

          const tapListDetails = await this.$axios.$post('https://501n7ggn65.execute-api.eu-west-1.amazonaws.com/prod', message );

          document.getElementById('js-contact-form').style.display = 'none';
          document.getElementById('js-contact-thankyou').style.display = 'block';
        }
        catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
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
</style>
