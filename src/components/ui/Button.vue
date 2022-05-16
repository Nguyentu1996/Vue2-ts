<template>
    <button class="p-2 inline-flex items-center justify-center" :class="className" >
      <slot></slot>
      <span class="pl-2 text-sm">{{ name }}</span>
    </button>
</template>
<script>
  export default {
    props: {
      className: String,
      name: String
    },
    method: {
      
    }
  }
</script>
<style lang="scss" scoped>
</style>
