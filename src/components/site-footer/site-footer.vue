<template>
  <footer class="footer wrapper">
    <div class="footer__contact u-margin-bottom--medium">
      <h2 class="heading2 heading--dark">Contact Us</h2>
      <address>
        <ul>
          <li class="u-margin-bottom--small"><a class="contact-item__anchor" href="mailto:beer@brendansbrewtique.co.uk">beer@brendansbrewtique.co.uk</a></li>
          <li class="u-margin-bottom--small"><a class="contact-item__anchor" href="tel:+441179831836">0117 983 1836</a></li>
          <li class="u-margin-bottom--small"><a class="contact-item__anchor" href="https://goo.gl/maps/5EkRMn5m1p82" target="_blank" rel="noopener noreferrer">104-106 Queens Road, Bristol BS8 1NF</a></li>
        </ul>
      </address>
    </div>
    <div class="footer__social u-margin-bottom--medium">
      <h2 class="heading2 heading--dark">Social</h2>
      <address>
        <ul>
          <li class="social__item"><a href="https://facebook.com/BrendansBrewtique" target="_blank" rel="noopener noreferrer" class="social__logo facebook__logo" title="Brendan's Brewtique on Facebook"></a></li>
          <li class="social__item"><a href="https://twitter.com/brendansbrewti2" target="_blank" rel="noopener noreferrer" class="social__logo twitter__logo" title="Brendan's Brewtique on Twitter"></a></li>
          <li class="social__item"><a href="https://instagram.com/brendansbrewtique" target="_blank" rel="noopener noreferrer" class="social__logo instagram__logo" title="Brendan's Brewtique on Instagram"></a></li>
          <li class="social__item"><a href="https://untappd.com/v/brendans-brewtique/8306452" target="_blank" rel="noopener noreferrer" class="social__logo untappd__logo" title="Brendan's Brewtique on Untappd"></a></li>
        </ul>
      </address>
    </div>
    <div class="footer__backtotop u-align--center">
      <a href="#header" class="backtotop__icon">
        <span class="backtotop__text small-text">Top</span>
      </a>
    </div>

    <div class="footer__copyright u-align--center">
      <p class="small-text">Brendan's Brewtique is a company registered in the United Kingdom. Company number: 11421855.</p>
      <p class="smallest-text">Site designed and developed by <a href="https://stash74.co.uk">Stash74</a> © 2018</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'SiteFooter'
  }
</script>

<style scoped lang="scss">
  .footer {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 1rem 2rem 1rem;
    background-color: var(--grey-light);
    color: var(--black);
  }

  @media (min-width: 50em) {
    .footer {
      padding: 1rem;
    }
  }

  .footer__contact {
    width: 90%;
    order: -2;
  }

  @media (min-width: 50em) {
    .footer__contact {
      width: 60%;
    }
  }

  .footer__social {
    width: 100%;
  }

  @media (min-width: 50em) {
    .footer__social {
      width: 35%;
    }
  }

  .footer__backtotop {
    display: flex;
    flex-direction: column;
    order: -1;
    font-size: 2em;
  }

  @media (min-width: 50em) {
    .footer__backtotop {
      order: 0;
      font-size: 3em;
    }
  }

  .backtotop__text {
    display: block;
    position: relative;
    top: 23px;
  }

  .backtotop__icon {
    text-decoration: none;
    color: var(--black);
    background: url('~assets/images/chevron-arrow-up.svg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px
  }

  .social__item {
    display: inline;
    padding-right: 10px;
  }

  .footer__copyright {
    width: 100%;
    color: var(--grey-dark);
  }

  .social__logo {
    display: inline-block;
    width: 30px;
    height: 30px;
  }

  .social__logo:hover {
    opacity: 0.7;
  }

  .facebook__logo {
    background: url('~assets/images/facebook-logo.svg');
  }

  .twitter__logo {
    background: url('~assets/images/twitter-logo.svg');
  }

  .instagram__logo {
    background: url('~assets/images/instagram-logo.svg');
  }

  .untappd__logo {
    background: url('~assets/images/untappd-logo.svg');
    background-size: contain;
  }

  .contact-item__anchor {
    color: var(--grey-dark);
  }

  .contact-item__anchor:hover {
    text-decoration: underline;
  }
</style>
