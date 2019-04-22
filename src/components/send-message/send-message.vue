<template>
  <div>
    <form id="js-contact-form" class="contact__form" novalidate="true">
      <fieldset>
          <legend><h2 class="heading2">Send us a message</h2></legend>
      </fieldset>

      <div class="u-margin-bottom--medium">
        <label for="name">Name</label>
        <div>
          <input id="name" class="contact__field" type="text" minlength="1" maxlength="20" required aria-required="true" v-model="contactName">
          <div v-if="errors.contactNameError" class="form-field__error">{{errors.contactNameError}}</div>
        </div>
      </div>

      <div class="u-margin-bottom--medium">
        <label for="email">Email</label>
        <div>
          <input id="email" class="contact__field" type="email" minlength="1" maxlength="50" required aria-required="true" v-model="contactEmail">
          <div v-if="errors.contactEmailError" class="form-field__error">{{errors.contactEmailError}}</div>
        </div>
      </div>

      <div class="u-margin-bottom--medium">
        <label for="message">Message</label>
        <div>
          <textarea id="message" class="contact__field contact__message" rows="5" cols="20" maxlength="500" required aria-required="true" v-model="contactMessage"></textarea>
          <div v-if="errors.contactMessageError" class="form-field__error">{{errors.contactMessageError}}</div>
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
        emailError: '',
        contactMessage: '',
        errors: {
          contactNameError: '',
          contactEmailError: '',
          contactMessageError: ''
        }
      }
    },
    methods: {
      formValid() {
        var formValid = true;
        this.errors.contactNameError = '';
        this.errors.contactEmailError = '';
        this.errors.contactMessageError = '';

        if (!this.contactName) {
          this.errors.contactNameError = "Please enter your name"
          formValid = false;
        }

        if (!this.contactEmail || !this.contactEmail.includes('@') || !this.contactEmail.includes('.') ) {
          this.errors.contactEmailError = "Please enter a valid email address"
          formValid = false;
        }

        if (!this.contactMessage) {
          this.errors.contactMessageError = "Please enter a message"
          formValid = false;
        }

        return formValid;
      },
      async sendContactMessage() {
        const message = {
            contactFromName: this.contactName,
            contactFromAddress: this.contactEmail,
            subject: 'Website contact request',
            message: this.contactMessage
        };

        if (this.formValid()) {
          try {
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

  .form-field__error {
    color: red;
  }
</style>
