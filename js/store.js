const store = new Vuex.Store({
    state: {
        participants: [{
            name: '',
            level: 0,
            key: 0
        }],
        currentMenu: null,
        pageCursor: 1
    },
    mutations: {
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
        }
    }
})
