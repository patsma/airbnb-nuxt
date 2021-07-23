<template>
  <div>
    <div v-for="home in homes" :key="home.objectId" style="float: left;margin: 10px">
      <NuxtLink :to="`/home/${home.objectID}`" prefetch>
        <home-card :home="home"/>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import homes from '~/data/home.json'

export default {
  head() {
    return {
      title: 'Homepage',
      meta: [{
        name: 'description',
        content: 'Thats a homepage',
        hid: 'description'
      }]
    }
  },
  data() {
    return {
      homes: homes.slice(0, 3)
    }
  }
}
</script>