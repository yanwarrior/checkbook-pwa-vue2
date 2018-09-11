<template>
  <div>
    <header-partial></header-partial>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderPartial from '@/components/partials/HeaderPartial'



export default {
  name: 'App',
  components: {
    'header-partial': HeaderPartial,
  }
}
</script>