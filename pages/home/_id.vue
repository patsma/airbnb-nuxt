<template>
  <div>
    {{ home.title }}
  </div>
</template>
<script>
import homes from '~/data/home'

export default {
  data() {
    return {
      home: {}
    }
  },
  created() {
    // console.log(this.$route)
    this.home = homes.find((home) => home.objectID === this.$route.params.id)
  }
}
</script>