<template>
  <a class="menu-button" @mouseenter="setHoveredIconName('button')" @mouseleave="setUnhovered">
    <customize-icon
      :path="'../../../../static-assets/icons/interface-icons/settings.svg'"
      :width="'20px'"
      :height="'4px'"
      :active="hoveredIconName === 'button'"
    />
  </a>
</template>
<script>
//--Components--//
import CustomizeIcon from '../supportComponents/CustomizeIcon.vue';
//--Mixins--//
import iconStateMixin from '../../mixins/IconStateMixin.js';

export default {
  props: {
    isMenuButtonActive: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CustomizeIcon,
  },
  mixins: [iconStateMixin],
  watch: {
    isMenuButtonActive(v) {
      if (v) {
        this.setHoveredIconName('button');
      } else {
        this.setHoveredIconName(null);
      }
    },
  },
  methods: {
    setUnhovered() {
      if (this.isMenuButtonActive) {
        return;
      }

      this.setHoveredIconName(null);
    }
  },
};
</script>
<style lang="scss" scoped>
.menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  fill: #9ea7af;
  transition: fill 0.4s ease;

  &.active,
  &:hover {
    fill: #0080ff;
  }

  &.inner {
    fill: #0080ff;
    height: 60px;
    margin-left: auto;
  }
}
</style>