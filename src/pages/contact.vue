<template>
  <main class="wrapper" id="main">
  <h1 class="heading1 heading--dark">Contact Us</h1>
  <section class="contact__details">
    <div class="contact-details__info">
      <section class="u-padding--small u-margin-bottom--large">
        <h2 class="heading2">Say Hi!</h2>
        <address>
          <div class="u-margin-bottom--medium">
            Email:
            <a href="mailto:beer@brendansbrewtique.co.uk" class="link body--bold" aria-label="">beer@brendansbrewtique.co.uk</a>
          </div>
          <div class="u-margin-bottom--medium">
            Phone:
            <a href="tel:+441179831836" class="link body--bold" aria-label="Phone us on 0 1 1 7. 9 8 3. 1 8 3 6">0117 983 1836</a>
          </div>
            Visit:
            <a href="https://goo.gl/maps/5EkRMn5m1p82" target="_blank" rel="noopener noreferrer" class="link body--bold">104-106 Queens Road, Bristol BS8 1NF</a>
        </address>
      </section>
      <section class="u-padding--small u-margin-bottom--large">
        <h2 class="heading2">When can you buy beer?</h2>
        <table>
          <tr>
            <td class="opening__day">Mon</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td class="opening__day">Tue to Thu</td>
            <td>12:00 to 19:00</td>
          </tr>
          <tr>
            <td class="opening__day">Fri</td>
            <td>12:00 to 21:00</td>
          </tr>
          <tr>
            <td class="opening__day">Sat</td>
            <td>11:00 to 21:00</td>
          </tr>
          <tr>
            <td class="opening__day">Sun</td>
            <td>12:00 to 16:00</td>
          </tr>
        </table>
      </section>
      <section class="u-padding--small u-margin-bottom--large">
        <h2 class="heading2">Stay in touch</h2>
        <p>
          <a href="https://brendansbrewtique.us19.list-manage.com/subscribe?u=704d66e0eb5901577a660513a&id=35a1020e2a" target="_blank" rel="noopener noreferrer" class="link body--bold">Sign up to our monthly newsletter</a>
        </p>
      </section>
    </div>
    <section class="contact-details__map u-margin-bottom--large">
      <h2 class="heading2">How to find us</h2>
      <iframe class="google-map" src="https://www.google.com/maps?q=104-106+Queens+road%0AClifton%0ABristol%0ABS8+1NF&output=embed&hl=en-GB&z=14" frameborder="0" title="Map of Brendan's Brewtique location"></iframe>
    </section>
  </section>

  <section class="u-padding--small u-margin-bottom--large">
    <send-message></send-message>
  </section>

</main>
</template>

<script>
  import SendMessage from '~/components/send-message/send-message';

  export default {
    components: { SendMessage },
    head () {
      return {
        title: 'Contact us - '/*,
        // Open Graph
        meta: [
          { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Contact us - Brendan\'s Brewtique - Craft beer shop, bottles & taps - Clifton, Bristol' },
          { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://brendansbrewtique.co.uk' },
          { hid: 'og-type', name: 'og-type', content: 'website' },
          { hid: 'og:image', name: 'og:image', property: 'og:image', content: '~assets/images/masthead.jpg'  ??????  Maybe put in static },
          { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Brendan\'s Brewtique is a taproom and bottleshop in Clifton, Bristol. We sell quality craft beer and cider from the local area and the rest of the world' }
        ]*/
      }
    }
  }
</script>

<style scoped lang="scss">
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

  .google-map {
    width: 100%;
    height: 350px;
  }

  @media (min-width: 50em) {
    .google-map {
      height: 400px;
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

  .opening__day {
    padding-right: 10px;
  }
</style>
