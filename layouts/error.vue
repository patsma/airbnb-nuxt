<template>
  <div class="">
    <h1>Error! Sorry ^^</h1>
    {{ error.message }}
    {{ error.statusCode }}
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Ooops I did it again"
    }
  },
  props: {
    error: {
      required: true,
      type: Object,
    }
  }
}
</script>
