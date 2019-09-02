<template>
  <ul class="custom-list">
    <li v-for="item in list" class="custom-list_item">
      <customize-icon
        :path="item.icon.path"
        :width="item.icon.width"
        :height="item.icon.height"
        :no-hover="true"
        class="custom-list_item-icon"
      />
      <span>{{ item.title }}</span>
    </li>
  </ul>
</template>
<script>
//--Components--//
import CustomizeIcon from './CustomizeIcon.vue';

export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CustomizeIcon,
  },
};
</script>
<style lang="scss">
.custom-list {
  & .custom-list_item {
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }

  & .custom-list_item-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>