let progressBar = {
    props: ['pageCursor'],
    template: `
    <div class="btn-group">
        <button v-for="i in 5" class="btn" :class="pageCursor == i ? 'btn-primary' : 'btn-default'" :id="'step'+i" @click="onStepClick(i)">Step {{i}}</button>
    </div>
    `,
    methods: {
        onStepClick: function(i) {
            this.$emit('stepChange', i)
        }
    }
}

let app = new Vue({
    el: '#app',
    store,
    data: function() {
        return {
            numPeople: 1
        }
    },
    computed: Vuex.mapState({
        pageCursor: state => state.pageCursor,
        currentMenu: state => state.currentMenu
    }),
    components: {
        'first-page': firstPage,
        'second-page': secondPage,
        'third-page': thirdPage,
        'fourth-page': fourthPage,
        'fifth-page': fifthPage,
        'progress-bar': progressBar
    },
    methods: {
        onLogoClick: function() {
            location.reload()
        },
        onPrevClick: function() {
            store.commit('decrementPageCursor')
        },
        onNextClick: function() {
            store.commit('incrementPageCursor')
        },
        onStepChange: function(i) {
            if (i > 0 && i < 6) {
                if (this.currentMenu != null)
                    store.commit('setPageCursor', {
                        pageCursor: i
                    })
            }
        },
        onFoodClick: function(food) {
            store.commit('setCurrentMenu', food)
        }
    },
    template: `
    <div class="app">
        <header>
            <nav>
                <a id="cooky_logo" href="#" @click="onLogoClick">Cooky</a>
            </nav>
            <div id="progress_bar">
                <span>
                    <a id="cooky_back" v-bind:class="pageCursor > 1? '': 'sarajo'" @click="onPrevClick"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a>
                <span id="progress-buttons"><progress-bar :pageCursor="pageCursor" @stepChange="onStepChange"></progress-bar></span>
                <a id="cooky_next" v-bind:class="pageCursor < 5? '': 'sarajo'" @click="onNextClick"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>
                </span>
            </div>
        </header>
        <div class="container">
            <first-page v-if="pageCursor == 1" @foodClick="onFoodClick"></first-page>
            <second-page v-else-if="pageCursor == 2" v-bind:numPeople=numPeople></second-page>
            <third-page v-else-if="pageCursor == 3"></third-page>
            <fourth-page v-else-if="pageCursor == 4"></fourth-page>
            <fifth-page v-else-if="pageCursor == 5"></fifth-page>
        </div>
    </div>
    `
});
