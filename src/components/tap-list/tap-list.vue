<template>
  <ul v-if="tapList && tapList.length">
    <li v-for="item in tapList" class="u-margin-bottom--medium">
      <h3 class="heading3">{{item.beverageName}} by {{item.breweryName}}</h3>
      <p>
        <span v-if="item.ABV !=='Unknown'">{{item.ABV}}</span>
        <span v-if="item.beverageStyle !== 'Unknown'">{{item.beverageStyle}}</span>
      </p>
    </li>
  </ul>
  <p v-else>No details available</p>
</template>

<script>
  export default {
    name: 'TapList',
    data() {
      return {
        tapList: []
      }
    },
    async created() {
      try {
        const tapListDetails = await this.$axios.$get('https://cwhgp6hr8i.execute-api.eu-west-2.amazonaws.com/prod?venueID=436469');
        this.tapList = tapListDetails.taplistDetails.beverageList;
      }
      catch(error) {
        console.log('Failed to get the taplist details');
      }
    }
  }
</script>
