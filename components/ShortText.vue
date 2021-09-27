<template>
  <span>{{ displayText }}
  <button v-if="isTooLong && !isExpanded" class="link" @click="isExpanded = true"> Read More</button>
  <button v-if="isTooLong && isExpanded" class="link" @click="isExpanded = false"> Read Less</button>
  </span>
</template>

<script>
export default {
  name: "ShortText",
  data() {
    return {
      isExpanded: false,
      chunks: []
    }
  },
  props: {
    text: {
      required: true,
      type: String,
    },
    target: {
      required: true,
      type: Number
    }
  },
  computed: {
    isTooLong() {
      return this.chunks.length === 2
    },
    displayText() {
      if (!this.isTooLong || this.isExpanded) return this.chunks.join(' ')
      return this.chunks[0] + '...'
    }
  },
  created() {
    this.chunks = this.getChunks()
  },
  methods: {
    getChunks() {
      const position = this.text.indexOf(" ", this.target)
      if (this.text.length <= this.target || position === -1) return [this.text]
      return [this.text.substring(0, position), this.text.substring(position)]
    }
  },

}
</script>

<style scoped>
.link {
  color: blue;
  background: white;
  border: none;
  text-decoration: underline;
  cursor: pointer;

}

.link:focus {
  outline: none;
  border: none
}
</style>
