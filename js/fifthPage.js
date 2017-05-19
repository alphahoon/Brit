let fifthPage = {
    data: function() {
        return {
            message: "Result View"
        }
    },
    computed: Vuex.mapState({
        participants: state => state.participants,
        currentMenu: state => state.currentMenu
    }),
    template: `
    <div>{{ message }}</div>
    `
}
