import SquadlistConsolidatedReport from '../components/pageComponents/SquadlistConsolidatedReport.vue';

export const routes = [
  {
    path: '/',
    name: 'squad',
    component: SquadlistConsolidatedReport,
  },
  {
    path: '/mainSquad',
    name: 'mainSquad',
    component: {
      template: '<div>bar</div>',
    },
  },
];