<template>
  <div class="right-bar">
    <ul class="right-bar__navigation main-menu">
      <li class="main-menu__item">
        <img :src="'../../static-assets/icons/badge.svg'" class="main-menu__icon" />
      </li>
      <li v-for="item in menuItems" :key="item.id" class="main-menu__item" @click="setActiveItem(item.id)">
        <img :src="item.icon" class="main-menu__icon" :alt="item.title" />
        <transition name="slideLeft">
          <ul v-if="item.subItems.length > 0" v-show="checkActiveItem(item.id)" class="main-menu__sub-list sub-menu">
            <li v-for="element in item.subItems" class="sub-menu__item">
              <div class="sub-menu__title">{{ element.title }}</div>

              <ul class="sub-menu__list">
                <li v-for="subItem in element.subItems" class="sub-menu__list-item">
                  <router-link :to="{name: subItem.link}" class="sub-menu__list-link">{{ subItem.title }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
    <transition name="fade">
      <div v-show="isOverlayShow" class="right-bar__overlay"></div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      menuItems: 'menuItems/getMenuItems',
    }),
    isOverlayShow() {
      return (
        this.menuItems[this.activeItemId] &&
        this.menuItems[this.activeItemId].subItems.length > 0 &&
        this.activeItemId !== null
      );
    },
    activeItem() {
      console.log(this.$route)
    },
  },
  data() {
    return {
      activeItemId: null,
    };
  },
  mounted() {
    document.addEventListener('click', this.overlayClickHandler);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.overlayClickHandler);
  },
  methods: {
    checkActiveItem(id) {
      return this.activeItemId === id;
    },
    setActiveItem(id) {
      if (this.activeItemId === id) {
        this.activeItemId = null;
      } else {
        this.activeItemId = id;
      }
    },
    overlayClickHandler(event) {
      if (event.target.classList.contains('right-bar__overlay')) {
        this.activeItemId = null;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.right-bar {
  position: relative;
  height: 100%;
  width: 100%;
  color: #fff;

  & .right-bar__navigation {
  }

  & .right-bar__overlay {
    position: fixed;
    display: block;
    width: calc(100vw - 60px);
    height: 100vh;
    left: 60px;
    top: 0;
    z-index: 998;
    background-color: rgba(11, 50, 101, 0.55);
  }
}

.main-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;

  & .main-menu__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    transition: background-color ease 0.2s;

    &:not(:first-child) {
      cursor: pointer;

      &.active,
      &:hover {
        background-color: #2480dc;
      }
    }
  }

  & .main-menu__icon {
    display: block;
    width: 30px;
    height: 30px;
  }

  & .main-menu__sub-list {
    position: fixed;
    width: 300px;
    height: 100%;
    left: 60px;
    top: 0;
    background-color: #fff;
    border: 1px solid #e3e5e7;
    box-shadow: 0 1px 10px 0 rgba(1, 0, 37, 0.1);
    z-index: 999;
    transform-origin: top left;
  }
}

.sub-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;

  .sub-menu__item {
    font-size: 13px;
    padding: 20px 0;
    margin: 0;
    text-align: left;
  }

  .sub-menu__title {
    font-weight: 700;
    line-height: 1.38;
    color: #353d43;
  }

  .sub-menu__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
    margin-left: 38px;
    padding-left: 13px;
    border-left: 2px solid #d5dade;
    
  }

  .sub-menu__list-item {
    margin: 0 0 15px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .sub-menu__list-link {
    color: #353d4a;
    text-decoration: none;
    transition: color ease 0.2s;

    &:hover {
      color: #0080ff;
    }
  }
}

// Animation menu
.slideLeft-enter {
  transform: scaleX(0);
  opacity: 0;
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slideLeft-enter-to {
  opacity: 1;
  transform: scaleX(100%);
}

.slideLeft-enter-active {
  transition: all 0.5s ease;
}

.slideLeft-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slideLeft-leave-to {
  opacity: 0;
  transform: scaleX(0);
}

//Animation overlay
.fade-enter {
  opacity: 0;
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 0.2s ease;
}

.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-leave-to {
  opacity: 0;
  transition-delay: 0.2s;
}
</style>