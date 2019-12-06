<template>
  <div class="squadlist-consolidated-report">
    <intelligence-table class="" :fields="fields" :tableData="squadData"/>
  </div>
</template>
<script>
//--Components--//
import IntelligenceTable from '../interfaceComponents/IntelligenceTable.vue';

  //--vuex--//
import { mapGetters } from 'vuex';


export default {
  components: {
    IntelligenceTable,
  },
  computed: {
    ...mapGetters({
      fields: 'squadList/getFullFieldsList',
      squadData: 'squadList/getFullSquadData',
    }),
  },
  mounted() {
    this.$store.dispatch('squadList/formSquadData')
  },
};
</script>
<style lang="scss" scoped>
.squadlist-consolidated-report {
  position: relative;
  width: calc(100vw - 100px);
  height: calc(100vh - 101px);
  overflow: scroll;
}
</style>