<template>
  <div class="flex h-full flex-col w-full p-4">
    <BreabCrumd />
    <Header />
    <BoardFilter />
    <BoardKanBan />
  </div>
</template>

<script lang="ts">
import Header from '../components/Header.vue'
import BoardFilter from '../components/BoardFilter.vue'
import BoardKanBan from '../components/BoardKanban.vue'
import BreabCrumd from '../components/Breadcrumd.vue'


export default {
  components: {
    Header,
    BoardFilter,
    BoardKanBan,
    BreabCrumd,
  }
}
</script>

<style lang="scss" scoped>
</style>
