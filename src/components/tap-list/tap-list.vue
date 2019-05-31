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
  <p v-else>No details currently available.</p>
</template>

<script>
  import getTapListDetailsForVenue from './repository.js';

  export default {
    name: 'TapList',
    data() {
      return {
        tapList: []
      }
    },
    async created() {
      try {
        const {data} = await this.getTapListDetails();
        if (data && data.taplistDetails && data.taplistDetails.beverageList) {
          this.tapList = data.taplistDetails.beverageList;
        }
      }
      catch(error) {
        console.log('Failed to get the taplist details');
        console.log(error);
      }
    },
    methods: {
      async getTapListDetails() {
        return getTapListDetailsForVenue(this.$axios);
      }
    }
  }
</script>
