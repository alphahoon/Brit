<template>
<div class="app">
    <header>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <a id="cooky_logo" href="#" @click="onLogoClick">Team Brit's Cooky</a>
                <progress-bar class="progress-buttons" :pageCursor="pageCursor" @stepChange="onStepChange"></progress-bar>
            </div>
        </nav>
    </header>
    <div class="container mainContents">
        <first-page v-if="firstPageShow" @foodClick="onFoodClick"></first-page>
        <second-page v-else-if="secondPageShow" :numPeople="numPeople"></second-page>
        <third-page ref="thirdPage" v-else-if="thirdPageShow"></third-page>
        <fourth-page ref="fourthPage" v-else-if="fourthPageShow" @moveScroll="moveScroll"></fourth-page>
        <fifth-page v-else-if="fifthPageShow"></fifth-page>
    </div>
    <!-- Footer -->
    <footer>
        <div id="progress_bar">
            <div class="col-md-4">
                <div class="prevButton" v-if="pageCursor > 1" :class="pageCursor > 1? '': 'sarajo'" @click="onPrevClick">⬅ Prev</div>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="nextButton" v-if="pageCursor < 5 && pageCursor > 1" :class="((pageCursor < 5) && (pageCursor > 1))? '': 'sarajo'" @click="onNextClick">Next ➡</div>
            </div>
        </div>
    </footer>
    <div id="toast_container">
        <div v-if="firstPageShow && !toastOneDismissed" class="toast" @click="toastOneDismiss">
            <span>{{toastOneContents}}</span>
        </div>
        <div v-else-if="secondPageShow && !toastTwoDismissed" class="toast" @click="toastTwoDismiss">
            <span>{{toastTwoContents}}</span>
        </div>
        <div v-else-if="thirdPageShow && !toastThreeDismissed" class="toast" @click="toastThreeDismiss">
            <span>{{toastThreeContents}}</span>
        </div>
        <div v-else-if="fourthPageShow && !toastFourDismissed" class="toast" @click="toastFourDismiss">
            <span>{{toastFourContents}}</span>
        </div>
        <div v-else-if="fifthPageShow && !toastFiveDismissed" class="toast" @click="toastFiveDismiss">
            <span>{{toastFiveContents}}</span>
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
            toastFiveDismissed: false,
            toastOneContents: "Welcome to Brit's Cooky! Choose your food to cook together. You can use the filter in the left :) (Click to Dismiss)",
            toastTwoContents: "Choose the serving amount and see the result in a Rough/Precise way. Do not forget to add ingredients in your favor :) (Click to Dismiss)",
            toastThreeContents: "Input your/collaborator's name and cooking level. You can list up to 4 participants (Click to Dismiss)",
            toastFourContents: "Distribute each cooking step by checking! Current Contribution Chart will show the your distribution. (Click to Dismiss)",
            toastFiveContents: "Follow the ditributed instruction. If you finish your work, click it :) (Click to Dismiss)"
        }
    },
    computed: mapState({
        pageCursor: state => state.pageCursor,
        currentMenu: state => state.currentMenu,
        participants: state => state.participants,
        firstPageShow: function () {
            if (this.pageCursor == 1) {
                setTimeout(this.toastOneDismiss, 30000);
                return true
            }
            return false
        },
        secondPageShow: function () {
            if (this.pageCursor == 2) {
                setTimeout(this.toastTwoDismiss, 30000);
                return true
            }
            return false
        },
        thirdPageShow: function () {
            if (this.pageCursor == 3) {
                setTimeout(this.toastThreeDismiss, 30000);
                return true
            }
            return false
        },
        fourthPageShow: function () {
            if (this.pageCursor == 4) {
                setTimeout(this.toastFourDismiss, 30000);
                return true
            }
            return false
        },
        fifthPageShow: function () {
            if (this.pageCursor == 5) {
                setTimeout(this.toastFiveDismiss, 30000);
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
            if (this.pageCursor == 3) {
                if (this.$store.getters.isEveryName) {
                    this.$store.commit('incrementPageCursor')
                } else if (this.$store.getters.emptyIndex != -1) {
                    this.$refs.thirdPage.onNextClick(this.$store.getters.emptyIndex)
                }
            } else if (this.pageCursor == 4) {
                if (this.$store.getters.isEveryStep) {
                    this.$store.commit('incrementPageCursor')
                } else if (this.$store.getters.uncheckedIndex != -1) {
                    this.$refs.fourthPage.onNextClick(this.$store.getters.uncheckedIndex)
                }
            } else {
                this.$store.commit('incrementPageCursor')
            }
        },
        onFoodClick: function (food) {
            this.$store.commit('setCurrentMenu', food)
        },
        moveScroll: function (top) {
            window.scrollTo(0, top)
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
.mainContents {
    padding-top: 100px;
}

nav.navbar.navbar-default {
    text-align: center;
    vertical-align: middle;
    background-color: #3498db;
    padding: 10px;
}

#cooky_logo {
    color: white;
    font-size: 2.5em;
    font-weight: bold;
    display: inline-block;
    float: left;
}

#cooky_logo:hover {
    text-decoration: none;
}

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

.progress-buttons {
    display: inline-block;
    padding: 0;
    margin: 0;
    float: right;
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
