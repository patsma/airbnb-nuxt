<template>
  <div class="">
    {{ error.message }}
    {{ error.statusCode }}
  </div>
</template>
<script>
export default {
  props: {
    error: {
      required: true,
      type: Object,
    }
  }
}
</script>
