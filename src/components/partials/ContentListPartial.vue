<template>
  <div>
    <div v-if="pretyMetaBooks" class="alert alert-primary" role="alert">
      {{ pretyMetaBooks }}
    </div>

    <div v-for="book in books" :key="book.ID" class="card" style="margin-bottom: 10px; width: auto;">
      <img class="card-img-top" :src="book.Image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ book.Title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ book.isbn }}</h6>
        <p class="card-text">{{ book.Description }}</p>
        <b-link :to="{name: 'bookdetail', params: {id: book.ID}}" exact>Detail</b-link>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'ContentList',
  computed: {
    books() {
      return this.$store.state.books
    },
    pretyMetaBooks() {
      return this.$store.getters.pretyMetaBooks
    }
  }
}
</script>
