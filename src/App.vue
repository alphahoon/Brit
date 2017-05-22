<template>
<div class="app">
    <header>
        <nav>
            <a id="cooky_logo" href="#" @click="onLogoClick">Team Brit's Cooky</a>
        </nav>
    </header>
    <div class="container">
        <first-page v-if="pageCursor == 1" @foodClick="onFoodClick"></first-page>
        <second-page v-else-if="pageCursor == 2" :numPeople="numPeople"></second-page>
        <third-page v-else-if="pageCursor == 3"></third-page>
        <fourth-page v-else-if="pageCursor == 4"></fourth-page>
        <fifth-page v-else-if="pageCursor == 5"></fifth-page>
    </div>
    <!-- Footer -->
    <footer>
        <div id="progress_bar" class="row">
            <!--
            <span>
            <a id="cooky_back" :class="pageCursor > 1? '': 'sarajo'" @click="onPrevClick"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a>
            <span id="progress-buttons"><progress-bar :pageCursor="pageCursor" @stepChange="onStepChange"></progress-bar></span>
            <a id="cooky_next" :class="((pageCursor < 5) && (pageCursor > 1))? '': 'sarajo'" @click="onNextClick"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>
            </span>
        -->
            <div class="col-md-3">
                <div class="prevButton" v-if="pageCursor > 1" :class="pageCursor > 1? '': 'sarajo'" @click="onPrevClick">⬅ Prev</div>
            </div>
            <div class="progressContainer col-md-6">
                <span id="progress-buttons"><progress-bar :pageCursor="pageCursor" @stepChange="onStepChange"></progress-bar></span>
            </div>
            <div class="col-md-3">
                <div class="nextButton" v-if="pageCursor < 5 && pageCursor > 1" :class="((pageCursor < 5) && (pageCursor > 1))? '': 'sarajo'" @click="onNextClick">Next ➡</div>
            </div>
        </div>
    </footer>
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
.prevButton {
    width: 100%;
    height: 100%;
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    color: #3498db;
    padding-top: 1em;
    padding-bottom: 1em;
}

.nextButton {
    width: 100%;
    height: 100%;
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    color: #3498db;
    padding-top: 1em;
    padding-bottom: 1em;
}

.prevButton:hover,
.nextButton:hover {
    cursor: pointer;
    color: #2980b9;
}

.nextButton:active,
.nextButton:active:hover {
    color: #1067A0;
}

.progressContainer {
    height: 152px;
    display: flex;
    align-items: center;
    text-align: center;
}

span#progress-buttons {
    display: inline-block;
    padding: 0;
    margin: 0;
    width: 100%;
}

#progress_bar {
    /*
    width: 100%;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    text-align: center;
    vertical-align: middle;
    background-color: #ecf0f1;
    clear: left;
    */
}

footer {
    clear: both;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    margin-bottom: -152px;
    /*
    clear: both;
    position: absolute;
    height: 3em;
    background: #ecf0f1;
    margin-top: -3em;
    text-align: right;
    margin-top: 2em;
    margin-bottom: -8em;
    padding-top: 2em;
    padding-right: 2em;
    padding-left: 2em;
    padding-bottom: 8em;
    font-weight: bold;
    right: 0;
    left: 0;
    bottom: 0;
    */
}
</style>
