<template>
  <div class="flex items-center mt-6">
    <form>
      <Input :icon="'search'" :styles="'padding-left: 32px'"/>
    </form>
  </div>
</template>

<script>
import Input from './ui/Input.vue'
  export default {
    components: {
      Input
    }
  }
</script>
<style lang="scss" scoped>

</style>
