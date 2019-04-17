<template>
  <ul>
    <li class="u-margin-bottom--medium">
      <h3 class="heading3">Umbral Abyss by Vibrant Forest</h3>
      <p>11.5% Imperial Coffee Stout</p>
    </li>
    <li class="u-margin-bottom--medium">
      <h3 class="heading3">Steading rolling man by Deya</h3>
      <p>5.2% American Pale Ale</p>
    </li>
    <li class="u-margin-bottom--medium">
      <h3 class="heading3">Even sharks need water by Verdant Brewing Co</h3>
      <p>6.5% New England IPA</p>
    </li>
    <li class="u-margin-bottom--medium">
      <h3 class="heading3">Fields Forever by Tiny Rebel</h3>
      <p>6.5% New England IPA</p>
    </li>
    <li class="u-margin-bottom--medium">
      <h3 class="heading3">Yellow Belly by Buxton Brewery</h3>
      <p>11% Imperial Stout</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'TapList',
    async created() {
        //taplist.io	https://taplist.io/taplist-436469
        //https://cwhgp6hr8i.execute-api.eu-west-2.amazonaws.com/prod?venueID=670357
        //const ip = await this.$axios.$get('https://cwhgp6hr8i.execute-api.eu-west-2.amazonaws.com/prod?venueID=670357')
        //console.log(ip);
    }
  }
</script>
