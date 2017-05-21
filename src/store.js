import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numPeople: 1,
    participants: [{
      name: '',
      level: 0,
      key: 0,
      distribution: []
    }],
    recipes: recipes,
    currentMenu: null,
    pageCursor: 1,
    distribution: []
  },
  mutations: {
    addAmount(state) {
      if (state.numPeople < 10)
        state.numPeople += 1
    },
    reduceAmount(state) {

      if (state.numPeople > 1)
        state.numPeople -= 1
    },
    setPageCursor(state, payload) {
      state.pageCursor = payload.pageCursor
    },
    incrementPageCursor(state) {
      if (state.pageCursor < 5) {
        state.pageCursor += 1
      }
    },
    decrementPageCursor(state) {
      if (state.pageCursor > 1) {
        state.pageCursor -= 1
      }
    },
    setCurrentMenu(state, currentMenu) {
      state.currentMenu = currentMenu
      var array = [];
      for(var i=0;i<currentMenu.steps.length;i++){
        array.push([]);
      }
      state.distribution = array;
      state.pageCursor = 2
    },
    addParticipant(state, participant) {
      state.participants.push(participant)
    },
    changeName(state, payload) {
      state.participants[payload.idx].name = payload.name
    },
    changeLevel(state, payload) {
      state.participants[payload.idx].level = payload.level
    },
    removeParticipant(state, payload) {
      state.participants.splice(payload.idx, 1)
    },

    pushDistribution(state,payload) {
      this.state.distribution[payload.step].push(payload.participant)
      // state.distribution[payload.step].push(payload.participant)
    },
    removeDistribution(state,payload){
      for(var i=0; i<state.distribution[payload.step].length; i++){
        if(state.distribution[payload.step][i] == payload.participant){
          state.distribution[payload.step].splice(i,1);
          break;
        }
      }
    }

  }
})
