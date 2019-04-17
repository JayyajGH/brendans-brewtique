<template>
  <div>
    <site-header></site-header>
    <nuxt />
    <site-footer></site-footer>
  </div>
</template>

<script>
  import SiteHeader from '~/components/site-header/site-header';
  import SiteFooter from '~/components/site-footer/site-footer';

  export default {
    components: { SiteHeader, SiteFooter },
  }
</script>


<style>
  :root {
    font-size: 100%;

    --white: #FFF;
    --black: #000;

    --grey-light: #D3D3D3;
    --grey-base: #70686b;
    --grey-dark: #3E3E3E;

    --orange-base: #A46313;
    --orange-dark: #8D5511;
  }

  /* Set up a decent box model on the root element */
  html {
    box-sizing: border-box;
  }

  /* Make all elements from the DOM inherit from the parent box-sizing
     Since `*` has a specificity of 0, it does not override the `html` value
     making all elements inheriting from the root box-sizing value
     See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--grey-base);
  }

  /* Margins */
  .u-margin-bottom--small {
    margin-bottom: 0.5rem !important;
  }

  .u-margin-bottom--medium {
    margin-bottom: 1rem !important;
  }

  .u-margin-bottom--large {
    margin-bottom: 2rem !important;
  }

  /* Align inline content */
  .u-align--left {
    text-align: left !important;
  }

  .u-align--right {
    text-align: right !important;
  }

  .u-align--center {
    text-align: center !important;
  }

  /* NB: This will be hidden from view but still be available to screenreaders
   http://webaim.org/techniques/css/invisiblecontent/ */
  .u-hidden-visually {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden;
  }

  .u-hidden-visually:focus {
    position: static;
    width: auto;
    height: auto;
  }

  .heading1 {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (min-width: 50em) {
    .heading1 {
      font-size: 2rem;
    }
  }

  .heading2 {
    font-size: 1.777rem;
    margin-bottom: 1.2rem;
  }

  .heading3 {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }

  .heading--dark {
    color: var(--black);
  }

  .heading--light {
    color: var(--white);
  }

  .small-text {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .body--bold {
    font-weight: 700;
  }

  .body--bold-light {
    font-weight: 600;
  }

  .smallest-text {
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
  }

  .button {
    display: inline-block;
    border: none;
    padding: 10px;
    border-radius: 2px;
  }

  .button:hover {
    background-color: var(--orange-dark);
  }

  .button--primary {
    background-color: var(--orange-base);
    color: var(--white);
  }

  .button-full-width {
    width: 100%;
  }
</style>
