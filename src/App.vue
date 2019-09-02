<template>
  <div id="app">
    <main-wrapper />
  </div>
</template>

<script>
  import MainWrapper from './components/pageComponents/MainWrapper.vue';

export default {
  name: 'app',
  components: {
    MainWrapper,
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
