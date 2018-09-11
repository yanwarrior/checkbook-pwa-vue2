<template>
  <div class="container-fluid">
    <div class="col-md-3"><br>
      <search-partial></search-partial>
    </div>
    <div class="col-md-9"><br>
      <content-list-partial></content-list-partial>
    </div>
  </div>
</template>

<script>
import SearchPartial from '@/components/partials/SearchPartial';
import ContentListPartial from '@/components/partials/ContentListPartial';


export default {
  name: 'BookList',
  components: {
    'search-partial': SearchPartial,
    'content-list-partial': ContentListPartial
  },
  data() {
    return {
      query: null
    }
  },
}
</script>

