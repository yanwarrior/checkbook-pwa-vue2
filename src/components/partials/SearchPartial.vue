<template>
  <b-input-group>
    <b-form-input v-model="payload.query"></b-form-input>
    <b-input-group-append>
      <b-btn variant="info" @click="getAll">Search</b-btn>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: 'SearchPartial',
  data() {
    return {
      payload: {query: 'Django Web'}
    }
  },
  methods: {
    getAll() {
      this.$store.dispatch('getAllBook', this.payload)
    }
  },
  mounted() {
    this.getAll()
  }
}
</script>

