<template>
  <div class="main-wrapper">
    <div class="main-menu main-wrapper__left-section">
      <right-bar class="bg-blue" />
    </div>
    <div class="top-line main-wrapper__top">
      <top-line class="bg-white" />
    </div>
    <div class="main-wrapper__content bg-grey">test</div>
  </div>
</template>
<script>
//--Components--//
import RightBar from '../interfaceComponents/RightBar.vue';
import TopLine from '../interfaceComponents/TopLine.vue';

export default {
  components: {
    RightBar,
    TopLine
  },
};
</script>
<style lang="scss">
.main-wrapper {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 60px calc(100vw - 60px);
  grid-template-rows: 61px auto;
  grid-template-areas:
    'leftMenu top'
    'leftMenu content';

  & .main-wrapper__top {
    grid-area: top;
  }

  & .main-wrapper__left-section {
    grid-area: leftMenu;
  }

  & .main-wrapper__content {
    grid-area: content;
  }
}
</style>