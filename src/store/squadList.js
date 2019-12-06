import squadList from './temporary/squadList.js';
import playersPosition from './temporary/playersPositions.js';
import squadCarearStats from './temporary/squadCarearStats.js';
import squadSeasonStats from './temporary/squadSeasonStats.js';
import fields from './temporary/squadListFields.js';

import playersAmplua from '../helpers/constants/amplua.js';
import { setPropsById } from '../helpers/setFunctions/setPropsById.js';
export default {
  namespaced: true,
  state: {
    squadList: squadList.data,
    playersPosition: playersPosition.data,
    fields: fields.data,
    squadCarearStats: squadCarearStats.data,
    squadSeasonStats: squadSeasonStats.data,
    fullSquadData: [],
  },
  getters: {
    getSquadList(state) {
      return state.squadList;
    },
    getPlayersPosition(state) {
      return state.playersPosition;
    },
    getSquadCarearStats(state) {
      return state.squadCarearStats;
    },
    getFullSquadData(state) {
      return state.fullSquadData;
    },
    getFullFieldsList(state) {
      return state.fields;
    },
  },
  actions: {
    formSquadData(context, payload) {
      context.commit('formSquadData', payload);
    },
  },
  mutations: {
    formSquadData(state, payload) {
      const fieldsSignature = state.fields
        .map(item => item.name)
        .reduce((acc, item) => {
          Object.defineProperty(acc, item, {
            enumerable: true,
            value: null,
            writable: true,
          });
          return acc;
        }, {});
      const fullData = [];

      const currentDate = new Date();

      state.squadList.forEach(i => {
        let obj = Object.assign({}, fieldsSignature, i);

        obj = setPropsById({ampluaVariations: 'ampluaIds'}, 'playerId', obj, state.playersPosition);
        obj = setPropsById(
          {
            'totalGamesInCarear':'totalGamesInCarear',
            'totalGoalConsendedInCarear':'totalGoalConsendedInCarear',
            'totalGameInInCarear': 'totalGameInInCarear',
            'totalGameOutInCarear': 'totalGameOutInCarear',
            'totalAsistsInCarear': 'totalAsistsInCarear',
            'lastMatch': 'lastMatch',
            'totalGoalScoredInCarear': 'totalGoalScoredInCarear',
            'totalAsistsInCarear': 'totalAsistsInCarear',
          },
          'playerId', obj, state.squadCarearStats
        );
        obj = setPropsById(
          {
            totalGamesInSeason:'totalGamesInSeason',
            totalGameInInSeason: 'totalGameInInSeason',
            totalGameOutInSeason: 'totalGameOutInSeason',
            totalAsistsInSeason: 'totalAsistsInSeason',
            totalGoalConsendedInSeason: 'totalGoalConsendedInSeason',
            totalGoalScoredInSeason: 'totalGoalScoredInSeason',
          },
          'playerId', obj, state.squadSeasonStats
        );
        obj.birthday = i.birthday ? 
        `${i.birthday.getDay()+1}/${i.birthday.getMonth()+1}/${i.birthday.getFullYear()}`
        : 'Не проставлено';
        obj.age = i.birthday ? 
          currentDate.getFullYear() - i.birthday.getFullYear() :
          'Не проставлено';
          obj.ampluaVariations = obj.ampluaVariations.map(item => playersAmplua[item] ? playersAmplua[item].title : '').join('\n')
        fullData.push(obj);
      });

      state.fullSquadData = fullData;
    },
  },
};