<template>
<div class="app">
    <header>
        <nav>
            <a id="cooky_logo" href="#" @click="onLogoClick">Team Brit's Cooky</a>
        </nav>
    </header>
    <div class="container">
        <first-page v-if="firstPageShow" @foodClick="onFoodClick"></first-page>
        <second-page v-else-if="secondPageShow" :numPeople="numPeople"></second-page>
        <third-page v-else-if="thirdPageShow"></third-page>
        <fourth-page v-else-if="fourthPageShow"></fourth-page>
        <fifth-page v-else-if="fifthPageShow"></fifth-page>
    </div>
    <!-- Footer -->
    <footer>
        <div id="progress_bar">
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
    <div id="toast_container">
        <div v-if="firstPageShow && !toastOneDismissed" class="toast" @click="toastOneDismiss">
            <span>Page 1 Tooltips (Click to Dismiss this message)</span>
        </div>
        <div v-else-if="secondPageShow && !toastTwoDismissed" class="toast" @click="toastTwoDismiss">
            <span>Page 2 Tooltips (Click to Dismiss this message)</span>
        </div>
        <div v-else-if="thirdPageShow && !toastThreeDismissed" class="toast" @click="toastThreeDismiss">
            <span>Page 3 Tooltips (Click to Dismiss this message)</span>
        </div>
        <div v-else-if="fourthPageShow && !toastFourDismissed" class="toast" @click="toastFourDismiss">
            <span>Page 4 Tooltips (Click to Dismiss this message)</span>
        </div>
        <div v-else-if="fifthPageShow && !toastFiveDismissed" class="toast" @click="toastFiveDismiss">
            <span>Page 5 Tooltips (Click to Dismiss this message)</span>
        </div>
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
    data: function () {
        return {
            toastOneDismissed: false,
            toastTwoDismissed: false,
            toastThreeDismissed: false,
            toastFourDismissed: false,
            toastFiveDismissed: false
        }
    },
    computed: mapState({
        pageCursor: state => state.pageCursor,
        currentMenu: state => state.currentMenu,
        firstPageShow: function () {
            if (this.pageCursor == 1) {
                setTimeout(this.toastOneDismiss, 4000);
                return true
            }
            return false
        },
        secondPageShow: function () {
            if (this.pageCursor == 2) {
                setTimeout(this.toastTwoDismiss, 4000);
                return true
            }
            return false
        },
        thirdPageShow: function () {
            if (this.pageCursor == 3) {
                setTimeout(this.toastThreeDismiss, 4000);
                return true
            }
            return false
        },
        fourthPageShow: function () {
            if (this.pageCursor == 4) {
                setTimeout(this.toastFourDismiss, 4000);
                return true
            }
            return false
        },
        fifthPageShow: function () {
            if (this.pageCursor == 5) {
                setTimeout(this.toastFiveDismiss, 4000);
                return true
            }
            return false
        },
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
        },
        toastOneDismiss: function () {
            this.toastOneDismissed = true;
        },
        toastTwoDismiss: function () {
            this.toastTwoDismissed = true;
        },
        toastThreeDismiss: function () {
            this.toastThreeDismissed = true;
        },
        toastFourDismiss: function () {
            this.toastFourDismissed = true;
        },
        toastFiveDismiss: function () {
            this.toastFiveDismissed = true;
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

footer {
    clear: both;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    margin-bottom: -152px;
}

div.toast {
    position: fixed;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -80%);
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 5rem;
    padding: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    z-index: 9;
    font-size: 2rem;
    opacity: 0.8;
    cursor: pointer;
}
</style>
