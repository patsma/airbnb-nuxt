<template>
  <div>
    <div style="display: flex;">
      <img v-for="image in home.images" :key="image" alt="Wonderful picture milord" :src="image" width="200"
           height="150"/>
    </div>
    {{ home.title }}
    ${{ home.pricePerNight }} / night <br>
    <img alt="" height="20" src="/images/marker.svg" width="20"/>{{ home.location.address }} {{
      home.location.city
    }}{{ home.location.state }} {{ home.location.country }} <br>
    <img src="/images/star.svg" width="20" height="20" alt=""/>{{ home.reviewValue }}<br>
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath <br>
    {{ home.description }}
    <div ref="map" class="" style="height: 800px;width: 800px"></div>
  </div>
</template>
<script>
import homes from '~/data/home'

export default {
  head() {
    return {
      title: this.home.title,

    }
  },
  data() {
    return {
      home: {}
    }
  },
  methods: {},
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng)
  },
  async created() {
    // console.log(this.$route)
    this.home = homes.find((home) => home.objectID === this.$route.params.id)
    const homeData = await this.$dataApi.getHome(this.$route.params.id)
    console.log(homeData)
  }
}
</script>