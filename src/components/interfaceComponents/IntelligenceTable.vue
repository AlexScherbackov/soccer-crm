<template>
  <div class="intelligence-table bg-white">
    <div class="intelligence-table__header">
      <div 
        v-for="field in fields"
        :key="field.name"
        class="intelligence-table__item  bg-sub-white"
        :class="'intelligence-table__item__' + field.width"
        @click="headerItemClickHandler(field)"
      >
        <span>{{field.title}}</span>
        <customize-icon
          v-if="sortingField === field.name"
          :path="sortIcons.path[sortType]"
          :width="sortIcons.width"
          :height="sortIcons.height"
          class="intelligence-table__sort-icon"
        />
      </div>
    </div>
    <div class="intelligence-table__content">
      <div v-for="(data, index) in tableData" :key="index" class="intelligence-table__row">
        <div v-for="(item, key) in data"
        class="intelligence-table__item bg-white"
        :class="'intelligence-table__item__' + getColumnWidth(key)"
        >
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CustomizeIcon from '../supportComponents/CustomizeIcon.vue';

  const SORT_ICONS = {
    path: {
      asc: '../../../static-assets/icons/interface-icons/sort_asc_right.svg',
      desc: '../../../static-assets/icons/interface-icons/sort_desc_right.svg',
    },
    width: '12px',
    height: '11px',
  }

  export default {
    props: {
      tableData: {
        type: Array||Object,
        default: () => [],
      },
      fields: {
        type: Array||Object,
        default: () => [],
      },
    },
    components: {
      CustomizeIcon,
    },
    computed: {
      sortIcons() {
        return SORT_ICONS;
      },
    },
    data() {
      return {
        sortType: 'asc',
        sortingField: null,
      }
    },
    methods: {
      headerItemClickHandler(field) {
        if (this.sortingField === field.name) {
          this.sortType = this.sortType === 'asc' ? 'desc' :'asc';
        } else {
          this.sortType = 'asc';
          this.sortingField = field.name;
        }

       // this.$store.dispatch('squadList/formSquadData', {name: field.name, order: this.sortType})
      },
      getColumnWidth(key) {
        const field = this.fields.find(field => field.name === key);
        return field ? field.width : 'mid'; 
      }
    },
  }
</script>
<style lang="scss" scoped>
  $title-color: #727d85;
  $border-color: #eeeff0;

  .intelligence-table {
    display: flex;
    flex-direction: column;
    position: relative;
    
    & .intelligence-table__header {
      position: sticky;
      top: 0;
      left: 0;
      z-index: 10;
    }

    & .intelligence-table__content {
      position: relative;
    }

    & .intelligence-table__header, & .intelligence-table__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    & .intelligence-table__item {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      font-size: 12px;
      color: $title-color;
      border-bottom: 1px solid $border-color;
      border-right: 1px solid $border-color;
      padding-left: 5px;
      padding-right: 5px;
      padding-top: 5px;
      padding-bottom: 5px;
      user-select: none;
      
      &:last-child {
        border-right: none;
      }

      &.intelligence-table__item__small {
        min-width: 60px;
      }

      &.intelligence-table__item__mid {
        min-width: 100px;
      }

      &.intelligence-table__item__upper-mid {
        min-width: 150px;
      }

      &.intelligence-table__item__large {
        min-width: 250px;
      }
    }

    & .intelligence-table__sort-icon {
    }
  }
</style>