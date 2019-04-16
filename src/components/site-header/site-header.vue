<template>
  <header class="u-margin-bottom--medium" id="header">

    <a href="#main" class="u-hidden-visually">Skip to main content</a>

    <nav class="site-nav">
      <a href="/">
        <img src="~/assets/images/bbt.svg" class="logo" alt="Brendan's Brewtique"/>
      </a>
      <ul class="site-nav__menu">
        <li class="site-nav__item site-nav__item--home"><a class="site-nav__link body--bold-light" href="/">Home</a></li>
        <li class="site-nav__item"><a class="site-nav__link body--bold-light" href="#about">About</a></li>
        <li class="site-nav__item"><a class="site-nav__link body--bold-light" href="#ontap">On Tap</a></li>
        <li class="site-nav__item"><a class="site-nav__link body--bold-light" href="#events">Events</a></li>
        <li class="site-nav__item"><router-link to="/contact" class="site-nav__link body--bold-light">Contact</router-link></li>
      </ul>
    </nav>
    <div class="hero u-margin-bottom--large">
    </div>
  </header>
</template>

<script>
  export default {
    name: 'SiteHeader'
  }
</script>

<style scoped lang="scss">
  .logo {
    width: 90px;
    position: absolute;
    border-radius: 3px;
    padding: 5px;
    background-color: var(--white);
  }

  .site-nav {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px 10px 15px;
  }

  .site-nav__menu {
    display: flex;
    flex-direction: row;
  }

  .site-nav__item {
    padding-left: 10px;
  }

  @media (min-width: 50em) {
    .site-nav__item {
      padding-left: 20px;
    }
  }

  .site-nav__item--home {
    display: none;
  }

  @media (min-width: 50em) {
    .site-nav__item--home {
      display: block;
    }
  }

  .site-nav__link {
    font-size: 1rem;
    transition: 0.3s;
    text-decoration: none;
    color: var(--grey-base);
  }

  @media (min-width: 50em) {
    .site-nav__link {
      font-size: 1.2rem;
    }
  }

  .site-nav__link:hover {
    color: var(--black);
    border-top: 2px solid var(--black);
    padding-top: 2px;
  }


  .hero {
    background-image: url('~assets/images/masthead.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 250px;
  }

  @media (min-width: 50em) {
    .hero {
      background-image: url('~assets/images/masthead-medium.jpg');
      top: 150px;
      min-height: 350px;
    }
  }

  @media (min-width: 93.75em) {
    .hero {
      background-image: url('~assets/images/masthead-large.jpg');
    }
  }
</style>
