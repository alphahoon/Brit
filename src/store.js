import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        numPeople: 1,
        participants: [{
            name: '',
            level: 0,
            key: 0
        }],
        recipes: recipes,
        currentMenu: null,
        pageCursor: 1,
        distribution: []
    },
    getters: {
        isEveryName: state => {
            return state.participants.reduce(function (prevValue, curValue, curIdx, array){
                return prevValue && (curValue.name !== '')
            }, true)
        },
        isEveryStep: state => {
            state.distribution.reduce(function(prevValue, curValue, curIdx, array){
                return prevValue && (curValue.length > 0)
            }, true)
        }
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
            if (state.pageCursor == 4) {
                var array = [];
                for (var i = 0; i < state.currentMenu.steps.length; i++) {
                    array.push([]);
                }
                state.distribution = array;
            }
            $('html, body').animate({
                scrollTop: 0
            }, 'fast')
        },
        decrementPageCursor(state) {
            if (state.pageCursor > 1) {
                state.pageCursor -= 1
            }
            if (state.pageCursor == 4) {
                var array = [];
                for (var i = 0; i < state.currentMenu.steps.length; i++) {
                    array.push([]);
                }
                state.distribution = array;
            }
            $('html, body').animate({
                scrollTop: 0
            }, 'fast')
        },
        setCurrentMenu(state, currentMenu) {
            state.currentMenu = currentMenu
            var array = [];
            for (var i = 0; i < currentMenu.steps.length; i++) {
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
        pushDistribution(state, payload) {
            state.distribution[payload.step].push(payload.participant)
        },
        removeDistribution(state, payload) {
            for (var i = 0; i < state.distribution[payload.step].length; i++) {
                if (state.distribution[payload.step][i] == payload.participant) {
                    state.distribution[payload.step].splice(i, 1);
                    break;
                }
            }
        }

    }
})
