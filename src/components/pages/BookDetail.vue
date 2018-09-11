<template>
  <div class="container-fluid">
    <br>
    <div v-if="book" class="col-md-12">
      <h3>{{ book.Title }}</h3>
      <figure class="figure">
        <img :src="book.Image" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
        <figcaption class="figure-caption">
          {{ book.Description }}
        </figcaption>
      </figure>
      <span class="badge badge-primary">ISBN: {{ book.isbn }}</span> <br><br>
    </div>
    <div v-else class="col-md-12">
      <div class="alert alert-warning" role="alert">
        This data is empty, you can get data from home page.
      </div>
    </div>

    <div class="col-md-12">
      <router-link to="/" class="btn btn-primary">Go to home page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookDetail',
  data() {
    return {
      payload: {id: this.$route.params.id}
    }
  },
  methods: {
    getBook() {
      this.$store.dispatch('getBook', this.payload)
    }
  },
  mounted() {
    this.getBook()
  },
  computed: {
    book() {
      return this.$store.state.book
    }
  }
}
</script>
