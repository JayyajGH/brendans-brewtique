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

      <input type="submit" class="button button--primary button-full-width body--bold" value="Send Message" @click.stop.prevent="sendContactMessage" />
      <div class="small-text">
        This site is protected by reCAPTCHA and the Google
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>
      <!--TODO: Add honeypot field -->
    </form>
    <div id="js-contact-thankyou" class="contact__thankyou u-align--center u-padding--medium" style="display: none">
      Thank you for your message.  We'll be in touch shortly
    </div>
  </div>
</template>

<script>
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
        return (this.contactEmail && this.contactEmail.includes('@') && this.contactEmail.includes('.') );
      },
      formValid() {
        var formValid = true;
        this.errors.contactNameError = '';
        this.errors.contactEmailError = '';
        this.errors.contactMessageError = '';

        if (!this.contactName) {
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
      sendContactMessage() {
        const reCAPTCHASiteKey = '6LfSaqAUAAAAAMJr1PYrT2APx2TFgatoefX_Vt26';
        const reCAPTCHAAction = 'contact_request';
        const message = {
            contactFromName: this.contactName,
            contactFromAddress: this.contactEmail,
            subject: 'Website contact request',
            message: this.contactMessage,
            token: ''
        };

        if (this.formValid()) {
          grecaptcha.ready(async () => {
            try {
              const recaptchaToken = await grecaptcha.execute(reCAPTCHASiteKey, {action: reCAPTCHAAction});

                /**************************/
                /* Add this to the server */
                /*
              console.log('Got token. About to call verify');
              const verify = await this.$axios.$post('https://www.google.com/recaptcha/api/siteverify', {
                secret: '6LfSaqAUAAAAAErPSa1g3ak8IzBlfZXJLBCH-8hI',
                response: recaptchaToken
              });

              console.log(verify);
              */
                /* Add this to the server */
                /**************************/

              message.token = recaptchaToken;

              await this.$axios.$post('https://501n7ggn65.execute-api.eu-west-1.amazonaws.com/prod', message);

              document.getElementById('js-contact-form').style.display = 'none';
              document.getElementById('js-contact-thankyou').style.display = 'block';
            }
            catch (error) {
              console.log('An error has occured');
              console.log(error);
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

  .contact__message {
    resize: none;
  }

  .contact__thankyou {
    background-color: var(--grey-base);
    color: var(--white);
  }

  .form-field__error {
    color: var(--red);
  }
</style>

<style>
  .grecaptcha-badge {
    visibility: hidden;
  }
</style>
