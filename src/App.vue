<template>
<div class="app">
    <header>
        <nav>
            <a id="cooky_logo" href="#" @click="onLogoClick">Cooky</a>
        </nav>
        <div id="progress_bar">
            <span>
            <a id="cooky_back" :class="pageCursor > 1? '': 'sarajo'" @click="onPrevClick"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a>
            <span id="progress-buttons"><progress-bar :pageCursor="pageCursor" @stepChange="onStepChange"></progress-bar></span>
            <a id="cooky_next" :class="((pageCursor < 5) && (pageCursor > 1))? '': 'sarajo'" @click="onNextClick"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>
            </span>
        </div>
    </header>
    <div class="container">
        <first-page v-if="pageCursor == 1" @foodClick="onFoodClick"></first-page>
        <second-page v-else-if="pageCursor == 2" :numPeople="numPeople"></second-page>
        <third-page v-else-if="pageCursor == 3"></third-page>
        <fourth-page v-else-if="pageCursor == 4"></fourth-page>
        <fifth-page v-else-if="pageCursor == 5"></fifth-page>
    </div>
</div>
</template>

<script>
import {
    mapState
}
from 'vuex'
import progressBar from './components/progressBar.vue'
import firstPage from './components/firstPage.vue'
import secondPage from './components/secondPage.vue'
import thirdPage from './components/thirdPage.vue'
import fourthPage from './components/fourthPage.vue'
import fifthPage from './components/fifthPage.vue'

export default {
    data: function () {},
    computed: mapState({
        pageCursor: state => state.pageCursor,
        currentMenu: state => state.currentMenu
    }),
    components: {
        progressBar,
        firstPage,
        secondPage,
        thirdPage,
        fourthPage,
        fifthPage
    },
    methods: {
        onLogoClick: function () {
            location.reload()
        },
        onPrevClick: function () {
            this.$store.commit('decrementPageCursor')
        },
        onNextClick: function () {
            this.$store.commit('incrementPageCursor')
        },
        onStepChange: function (i) {
            if (i > 0 && i < 6) {
                if (this.currentMenu != null)
                    this.$store.commit('setPageCursor', {
                        pageCursor: i
                    })
            }
        },
        onFoodClick: function (food) {
            this.$store.commit('setCurrentMenu', food)
        }
    }
}
</script>

<style scoped>

</style>
