<template>
  <div>
    <form id="js-contact-form" class="contact__form" novalidate="true">
      <fieldset>
          <legend><h2 class="heading2">Send us a message</h2></legend>

          <div class="u-margin-bottom--medium">
            <label for="name">Name</label>
            <div>
              <input id="name"
                     class="contact__field u-padding--small" :class="{'contact__field--error': errors.contactNameError}"
                     type="text" minlength="1" maxlength="20"
                     required aria-required="true"
                     :aria-invalid="errors.contactNameError ? true : false"
                     :aria-describedBy="errors.contactNameError ? 'name-error' : false"
                     v-model="contactName">
              <div v-if="errors.contactNameError" id="name-error" class="form-field__error">{{errors.contactNameError}}</div>
            </div>
          </div>

          <div class="u-margin-bottom--medium">
            <label for="email">Email</label>
            <div>
              <input id="email"
                     class="contact__field u-padding--small" :class="{'contact__field--error': errors.contactEmailError}"
                     type="email" minlength="1" maxlength="100"
                     required aria-required="true"
                     :aria-invalid="errors.contactEmailError ? true : false"
                     :aria-describedBy="errors.contactEmailError ? 'email-error' : false"
                     v-model="contactEmail">
              <div v-if="errors.contactEmailError" id="email-error" class="form-field__error">{{errors.contactEmailError}}</div>
            </div>
          </div>

          <div class="u-margin-bottom--medium">
            <label for="message">Message</label>
            <div>
              <textarea id="message"
                        class="contact__field contact__message u-padding--small"  :class="{'contact__field--error': errors.contactMessageError}"
                        rows="5" cols="20" maxlength="500"
                        required aria-required="true"
                        :aria-invalid="errors.contactMessageError ? true : false"
                        :aria-describedBy="errors.contactMessageError ? 'message-error' : false"
                        v-model="contactMessage"></textarea>
              <div v-if="errors.contactMessageError" id="message-error" class="form-field__error">{{errors.contactMessageError}}</div>
            </div>
          </div>
      </fieldset>

      <button type="button" class="button button--primary button-full-width body--bold" @click="sendContactMessage">Send Message</button>

      <div class="small-text">
        This site is protected by reCAPTCHA and the Google
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>
    </form>
    <div id="js-contact-thankyou" class="contact__thankyou u-align--center u-padding--medium" style="display: none">
      Thank you for your message.  We'll be in touch shortly
    </div>
  </div>
</template>

<script>
  import fireContactRequestWithMessage from './repository.js';

  export default {
    name: 'SendMessage',
    head () {
      return {
        script: [
          { type: 'text/javascript', src: 'https://www.google.com/recaptcha/api.js?render=6LfSaqAUAAAAAMJr1PYrT2APx2TFgatoefX_Vt26', async: true }
        ]
      }
    },
    data() {
      return {
        contactName: '',
        contactEmail: '',
        contactMessage: '',
        errors: {
          contactNameError: '',
          contactEmailError: '',
          contactMessageError: ''
        }
      }
    },
    methods: {
      isEmailAddressValid() {
        // Convert the contactEmail to a Boolean so this function will always return True or false
        // Otherwise the lazy evaluation will return an empty string if contactEmail is empty
        return (Boolean(this.contactEmail) && this.contactEmail.includes('@') && this.contactEmail.includes('.') );
      },
      formValid() {
        var formValid = true;
        this.errors.contactNameError = '';
        this.errors.contactEmailError = '';
        this.errors.contactMessageError = '';

        if (!this.contactName || !this.contactName.trim()) {
          this.errors.contactNameError = "Please enter your name"
          formValid = false;
        }

        if (!this.isEmailAddressValid()) {
          this.errors.contactEmailError = "Please enter a valid email address"
          formValid = false;
        }

        if (!this.contactMessage) {
          this.errors.contactMessageError = "Please enter a message"
          formValid = false;
        }

        return formValid;
      },
      displaySuccessMessage() {
        document.getElementById('js-contact-form').style.display = 'none';
        document.getElementById('js-contact-thankyou').style.display = 'block';
      },
      async fireContactRequest(recaptchaToken) {
        if (!recaptchaToken) {
          throw Error('Invalid parameter');
        }

        const message = {
            contactFromName: this.contactName,
            contactFromAddress: this.contactEmail,
            subject: 'Website contact request',
            message: this.contactMessage,
            recaptchaToken: recaptchaToken
        };

        try {
          await fireContactRequestWithMessage(this.$axios, message);
          this.displaySuccessMessage();
        }
        catch (error) {
          console.log('An error has occured when attempting to send the contact request');
          console.log(error);
        }
      },
      sendContactMessage() {
        const reCAPTCHASiteKey = '6LfSaqAUAAAAAMJr1PYrT2APx2TFgatoefX_Vt26';
        const reCAPTCHAAction = 'contact_request';
        let reCAPTCHAToken = '';

        if (this.formValid()) {
          console.log('Attempting to send a contact message from ' + this.contactName);

          // This form uses Google reCAPTCHA to protect the form submission
          // Check the Google reCAPTCHA library has loaded
          grecaptcha.ready(async () => {
            try {
              // Call Google reCAPTCHA to get a verification token
              reCAPTCHAToken = await grecaptcha.execute(reCAPTCHASiteKey, {action: reCAPTCHAAction});
            }
            catch (error) {
              console.log('An error has occured whilst getting the reCAPTCHA verification token');
              console.log(error);
            }

            if (reCAPTCHAToken) {
              this.fireContactRequest(reCAPTCHAToken);
            }
          });
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
    border: 1px solid var(--grey-light);
    width: 100%;
    border-radius: 2px;
  }

  .contact__field--error {
    border: 1px solid var(--red);
  }

  .form-field__error {
    color: var(--red);
  }

  .contact__message {
    resize: none;
  }

  .contact__thankyou {
    background-color: var(--grey-base);
    color: var(--white);
  }
</style>

<style lang="scss">
  // This can't be scoped as the HTML is generated by a Google API outside of this Vue file
  .grecaptcha-badge {
    visibility: hidden;
  }
</style>
