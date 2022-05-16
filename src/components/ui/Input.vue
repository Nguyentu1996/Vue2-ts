<template>
  <div class="relative relative w-full h-8">
    <div v-if="icon === 'search'" class="icon-search" >
      <SearchIcon />
    </div>
    <input type="text" :style="styles" class="border border-slate-400"/>
  </div>
</template>

<script>
  import SearchIcon from '../svg/Search.vue'

  export default {
    components: {
      SearchIcon
    },
    props: {
      icon: String,
      styles: String,
    },
    method: {},
  };
</script>

<style lang="scss" scoped>
  .icon-search {
    position: absolute;
    left: 0;
    top: 0;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    height: 100%;
    width: 100%;
    padding: .325rem .75rem;
    border-radius: 3px;
    color: #172b4d;
    font-size: 15px;
    transition: background-color .1s;
  }
  input:focus {
    background-color: #ffffff;
  }
</style>
