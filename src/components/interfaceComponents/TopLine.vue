<template>
  <div class="top-line">
    <div class="top-line__interface"></div>
    <div class="top-line__settings">
      <menu-button :isMenuButtonActive="isTopLineMenuOpened" class="top-line__settings-button" @click.native="menuButtonClickHandler"/>
      <unordered-list
        v-show="isTopLineMenuOpened"
        :list="topLineSettings" 
        class="top-line__settings-list settings-list bg-white" 
      />
    </div>
  </div>
</template>
<script>
  //--Components--//
  import MenuButton from '../buttons/MenuButton.vue';
  import UnorderedList from '../supportComponents/UnorderedList.vue';

  //--vuex--//
  import { mapGetters } from 'vuex';

  export default {
    components: {
      MenuButton,
      UnorderedList,
    },
    computed: {
      ...mapGetters({
        topLineSettings: 'topLineNavigateItems/getTopLineNavigateItems'
      }),
    },
    data() {
      return {
        isTopLineMenuOpened: false,
      }
    },
    mounted() {
      document.addEventListener('click' , this.closeTopLineMenu);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.closeTopLineMenu);
    },
    methods: {
      menuButtonClickHandler() {
        this.isTopLineMenuOpened = !this.isTopLineMenuOpened
      },
      closeTopLineMenu(e) {
        if(!e.path.some(item => item.classList && item.classList.contains('top-line__settings'))) {
         this.isTopLineMenuOpened = false;
        }

      },
    },
  }
</script>
<style lang="scss" scoped>
  $border-color: #e3e5e7;
  $hover-bg: #f4f5f7;
  
  .top-line {
    display: inline-grid;
    grid-template-columns: calc(100% - 60px) 60px;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid $border-color;

    & .top-line__settings {
      border-left: 1px solid $border-color;
    }

    & .top-line__settings-button {
      position: relative;
      z-index: 10;
    }

    & .top-line__settings-list {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 9;
    }
  }

  .settings-list {
    display: flex;
    flex-direction: column;
    width: 267px;
    padding-top: 60px;
    border: 1px solid $border-color;
    box-shadow: 0 2px 16px 0 rgba(6,19,39,.15);


    & /deep/ .custom-list_item {
      line-height: 50px;
      color: #464e55;
      font-size: 14px;
      margin-top: 10px;
      margin-bottom: 5px;
      padding-left: 50px;

      &:hover {
       background-color: $hover-bg;
      }

      &:last-child {
        margin-bottom: 0;
      }

      & .custom-list_item-icon {
        left: 20px;
      }
    }
  }
</style>