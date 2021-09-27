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
    <div v-for="review in reviews" :key="review.objectID">
      <img :src=review.reviewer.image alt=""/><br>
      {{ review.reviewer.name }}<br>
      {{ formatDate(review.date) }}<br>
      <!--      {{ review.comment }}<br>-->
      <short-text :target="150" :text="review.comment"></short-text>

    </div>
    <img :src="user.image" alt="">
    {{ user.name }}
    {{ formatDate(user.joined) }}
    {{ user.description }}
  </div>
</template>
<script>

export default {
  head() {
    return {
      title: this.home.title,
    }
  },

  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr)
      return date.toLocaleDateString(undefined, {month: 'long', year: 'numeric'})
    }
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng)
  },
  async asyncData({params, $dataApi, error}) {
    const responses = await Promise.all([
      $dataApi.getHome(params.id),
      $dataApi.getReviewsByHomeId(params.id),
      $dataApi.getUserByHomeId(params.id)
    ])

    const badResponses = responses.find((response) => !response.ok)
    if (badResponses) return error({statusCode: badResponses.status, message: badResponses.statusText})


    return {
      home: responses[0].json,
      reviews: responses[1].json.hits,
      user: responses[2].json.hits[0]
    }
  }
}
</script>
