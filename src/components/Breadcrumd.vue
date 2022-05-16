<template>
  <h2 class="font-medium text-slate-500 text-left	mb-2"> Project / {{ name.name}} </h2>
</template>
<script lang="ts">
import { Route } from 'vue-router';

  export default {
    computed: {
      name(): Route {
        // @ts-ignore
        const route: any = this.$route
        return route;
      }
    },
    methods: {
      
    },
  }
</script>
<style lang="scss" scoped>

</style>
