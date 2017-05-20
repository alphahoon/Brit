let secondPage = {
    props: ['numPeople'],
    computed: Vuex.mapState({
        recipe: state => state.currentMenu
    }),
    data: function() {
        return {
            unit_mode: 'r'
        }
    },
    methods: {
        p_mode: function() {
            this.unit_mode = 'p';
        },
        r_mode: function() {
            this.unit_mode = 'r'
        }
    },
    template: `
        <div>
          <div>
            <menu-main v-bind:title=recipe.title v-bind:amount=numPeople v-bind:imageLink=recipe.imageLink></menu-main>
          </div>
            <div class="btn-group" role="group" aria-label="...">
              <button type="button" class="btn btn-default" v-on:click="p_mode">Precisely</button>
              <button type="button" class="btn btn-default" v-on:click="r_mode">Roughly</button>
            </div>
            <div class="row" style="height:300px;margin-top: 20px;padding-left:10%">
                <tool-list v-bind:tools=recipe.tools></tool-list>
                <main-ing-list v-bind:amount=numPeople v-bind:main_ings=recipe.main v-bind:mode=unit_mode></main-ing-list>
                <sub-ing-list v-bind:amount=numPeople v-bind:sub_ings=recipe.sub v-bind:mode=unit_mode></sub-ing-list>
            </div>
        </div>`
};

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
        reduceAmount: function() {
            if (app.numPeople > 1) {
                app.numPeople--;
            }
        },
        addAmount: function() {
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
    template: `<div v-if="mode === 'r'"><span>{{ info.name }}</span>
        <span style="color:#8BC34A">{{info.ramount * amount}}{{ info.runit }}</span>
          </div>
          <div v-else><span>{{ info.name }}</span>
              <span style="color:#8BC34A">{{info.pamount * amount}}{{ info.punit }}</span>
            </div>`
});

Vue.component('subing', {
    props: ['info', 'amount', 'mode'],
    template: `<div v-if="mode === 'r'">
      <input type="checkbox" style="margin-right:10px"/>{{ info.name }}
      <span style="color:#00BCD4">{{info.ramount * amount}}{{ info.runit }}</span>
      </div>
      <div v-else>
        <input type="checkbox" style="margin-right:10px"/>{{ info.name }}
        <span style="color:#00BCD4">{{info.pamount * amount}}{{ info.punit }}</span>
        </div>`
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
