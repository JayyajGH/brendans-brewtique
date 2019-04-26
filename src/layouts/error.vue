<template>
  <main class="wrapper" id="main">
    <section class="u-padding--small u-margin-bottom--large">
      <h1 v-if="error.statusCode === 404" class="heading1 heading--dark">404, Page not found</h1>
      <h1 v-else class="heading1 heading--dark">An error occured</h1>
      <p>Oops! It looks like something has gone wrong. Click
        <nuxt-link to="/" class="link body--bold">here</nuxt-link>
        to return to the home page
      </p>
    </section>
  </main>
</template>

<script>
  export default {
    props: ['error']
  }
</script>
