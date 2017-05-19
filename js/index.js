let secondPage = {
    props: ['numPeople'],
    computed: Vuex.mapState({
        recipe: state => state.currentMenu
    }),
    template: `
        <div>
            <menu-main v-bind:title=recipe.title v-bind:amount=numPeople v-bind:imageLink=recipe.imageLink></menu-main>
            <div class="btn-group" role="group" aria-label="...">
              <button type="button" class="btn btn-default" v-on:click="p_mode">Precisely</button>
              <button type="button" class="btn btn-default" v-on:click="r_mode">Roughly</button>
            </div>
            <div class="row" style="height:300px;margin-top: 20px;padding-left:10%">
                <tool-list v-bind:tools=recipe.tools></tool-list>
                <main-ing-list v-bind:amount=numPeople v-bind:main_ings=recipe.main v-bind:mode=unit_mode></main-ing-list>
                <sub-ing-list v-bind:amount=numPeople v-bind:sub_ings=recipe.sub v-bind:mode=unit_mode></sub-ing-list>
            </div>
        </div>`,
      method: {
        p_mode: function() {
          unit_mode = 'p';
        },
        r_mode: function() {
          unit_mode = 'r'
        }
      }
};

let workStep = {
    props: ['work'],
    computed: {
        timeCal: function() {
            let hour = this.work.time / 60
            let min = this.work.time % 60
            let str = ((hour === 0) ? hour + ' hrs ' : '') + min + ' mins'
            return str
        },
        difficulty: function() {
            if (this.work.difficulty == 0) {
                return 'Easy'
            } else if (this.work.difficulty == 1) {
                return 'Medium'
            } else if (this.work.difficulty == 2) {
                return 'Hard'
            }
        }
    },
    template: `
    <div class="row">
        <div id="rowWork" class="col-md-11">
            <div id="workContent" class="col-sm-6">
                <div>
                    <div class="workText"> {{this.work.text}} </div>
                    <div class="workAttribute col-md-5"> {{difficulty}}
                        <div class="timeCal"><span class="glyphicon glyphicon-time"></span>{{timeCal}}</div>
                    </div>
                </div>
            </div>
            <form class="checkBoxGroup">
                <label class="checkbox-inline">
                    <input type="checkbox" value=0> </label>
                <label class="checkbox-inline">
                    <input type="checkbox" value=1> </label>
                <label class="checkbox-inline">
                    <input type="checkbox" value=2> </label>
                <label class="checkbox-inline">
                    <input type="checkbox" value=3> </label>
            </form>
        </div>
    </div>
    `
}

let workList = {
    props: ['workList'],
    components: {
        'work-step': workStep
    },
    template: `
    <div>
        <work-step v-for="work in workList" :work="work"></work-step>
    </div>
    `
}

let fourthPage = {
     computed: Vuex.mapState({
        participants: state => state.participants,
        currentMenu: state => state.currentMenu,
        workList: state => state.currentMenu.steps
    }),
    components: {
        'work-list': workList
    },
    template: `
    <div>
        <div id="distributeBlock">
            <h1> Distribute Your Work!</h1>
            <work-list :workList="workList"></work-list>
        </div>
        <div class="graphBlock">
        </div>
    </div>
    `
}

let fifthPage = {
    data: function () {
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

let progressBar = {
    props: ['pageCursor'],
    template: `
    <div class="btn-group">
        <button v-for="i in 5" class="btn" :class="pageCursor == i ? 'btn-primary' : 'btn-default'" :id="'step'+i" @click="onStepClick(i)">Step {{i}}</button>
    </div>
    `,
    methods: {
        onStepClick: function (i) {
            this.$emit('stepChange', i)
        }
    }
}

let app = new Vue({
    el: '#app',
    store,
    data: function () {
        return {
            numPeople: 1
        }
    },
    computed: Vuex.mapState({
        pageCursor: state => state.pageCursor
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
        onLogoClick: function () {
            location.reload()
        },
        onPrevClick: function () {
            store.commit('decrementPageCursor')
        },
        onNextClick: function () {
            store.commit('incrementPageCursor')
        },
        onStepChange: function (i) {
            if (i > 0 && i < 6) {
                store.commit('setPageCursor', { pageCursor: i })
            }
        },
        onFoodClick: function (food) {
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

// sketch2
Vue.component('menu-main', {
    props: ['title', 'imageLink', 'amount'],
    template: `
    <div style="text-align:center">
        <div class="row">
            <h3>{{title}}</h3>
        </div>
        <div class="row" style="margin-bottom: 10px;">
            <img v-bind:src=imageLink width='300' height='200'>
        </div>
        <div class="row">
            <span style="font-size:1.5em; font-weight:bold"> Serving Amount : </span>
            <button v-on:click="reduceAmount" class="btn btn-xs btn-danger glyphicon glyphicon-minus servingAdjust" aria-hidden="true" />
            <span style="font-weight:bold;font-size:1.5em"> {{amount}} </span>
            <button v-on:click="addAmount" class="btn btn-xs btn-danger glyphicon glyphicon-plus servingAdjust" aria-hidden="true" />
        </div>
    </div>
    `,
    methods: {
        reduceAmount: function () {
            if (app.numPeople > 1) {
                app.numPeople--;
            }
        },
        addAmount: function () {
            if (app.numPeople < 10) {
                app.numPeople++;
            }
        }
    }
});

Vue.component('tool', {
    props: ['name'],
    template: `
    <div>{{ name }}</div>
    `
});

Vue.component('maining', {
    props: ['info', 'amount', 'mode'],
    template: '<div><span>{{ info.name }}</span> <span style="color:#8BC34A">{{info.amount * amount}}{{ info.unit }}</span></div>'
});

Vue.component('subing', {
    props: ['info', 'amount', 'mode'],
    template: '<div><input type="checkbox" style="margin-right:10px"/>{{ info.name }} <span style="color:#00BCD4">{{info.amount * amount}}{{ info.unit }}</span></div>'
});

Vue.component('tool-list', {
    props: ['tools'],
    template: `
    <div class="col-sm-3 panel panel-warning">
        <div class="panel-heading">
            <span class="glyphicon glyphicon-cutlery" aria-hidden="true" style="margin-left:10px"> Cooking Tools</span>
        </div>
        <div class="panel-body">
            <tool v-for="item in tools" v-bind:name="item"></tool>
        </div>
    </div>
    `
});

Vue.component('main-ing-list', {
    props: ['main_ings', 'amount', 'mode'],
    template: `<div class="col-sm-4 panel panel-success">
      <div class="panel-heading">
            <span class="glyphicon glyphicon-apple" aria-hidden="true" style="margin-left:10px"> Main Ingredients</span>
        </div>
      <div class="panel-body">
        <maining v-for="item in main_ings" v-bind:info="item" v-bind:amount="amount" v-bind:mode="mode"></maining>
      </div>
    </div>`
});


Vue.component('sub-ing-list', {
    props: ['sub_ings', 'amount', 'mode'],
    template: `<div class="col-sm-3 panel panel-info">
      <div class="panel-heading">
            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" style="margin-left:10px"> Extra Ingredients</span>
        </div>
      <div class="panel-body">
        <subing v-for="item in sub_ings" v-bind:info="item" v-bind:amount="amount" v-bind:mode="mode"></subing>
      </div>
    </div>`
});
