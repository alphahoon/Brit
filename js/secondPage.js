let secondPage = {
    props: ['numPeople'],
    computed: Vuex.mapState({
        recipe: state => state.currentMenu
    }),
    data: function() {
        return {
            unit_mode: 'r'
        };
    },
    methods: {
        p_mode: function() {
            this.unit_mode = 'p';
            document.getElementById('r_button').className="btn btn-default";
        },
        r_mode: function() {
            this.unit_mode = 'r';
        }
    },
    template: `
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <menu-main v-bind:title=recipe.title v-bind:amount=numPeople v-bind:imageLink=recipe.imageLink></menu-main>
            <div class="btn-group" role="group" aria-label="..." style="margin: 0 auto">
              <button type="button" id="r_button" class="btn btn-default active" v-on:click="r_mode"><img src="assets/hand.png" style="width:25px; border: none;"> Rough</button>
              <button type="button" class="btn btn-default" v-on:click="p_mode"><img src="assets/beaker.png" style="width:25px; border: none;"> Precise</button>
            </div>
          </div>
          <div class="col-md-8 col-sm-8">
            <tool-list v-bind:tools=recipe.tools></tool-list>
            <main-ing-list v-bind:amount=numPeople v-bind:main_ings=recipe.main v-bind:mode=unit_mode></main-ing-list>
            <sub-ing-list v-bind:amount=numPeople v-bind:sub_ings=recipe.sub v-bind:mode=unit_mode></sub-ing-list>
          </div>
        </div>`
};

Vue.component('menu-main', {
    props: ['title', 'imageLink', 'amount'],
    template: `
    <div style="text-align:left; padding-left:20px">
        <div class="row" style="width: 90%; padding-right: 10px;">
            <h3>{{title}}</h3>
        </div>
        <div class="row" style="margin-bottom: 10px;">
            <img v-bind:src=imageLink style="width: 90%">
        </div>
        <div class="row">
            <span style="font-size:1.2em; font-weight:bold"> Serving Amount : </span>
            <button v-on:click="reduceAmount" class="btn btn-xs btn-danger glyphicon glyphicon-minus servingAdjust" aria-hidden="true" />
            <span style="font-weight:bold;font-size:1.2em"> {{amount}} </span>
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
    <div class="panel panel-warning">
        <div class="panel-heading">
            <span class="glyphicon glyphicon-cutlery" aria-hidden="true" style="margin-left:10px; font-weight:bold; font-size:1.3em; text-align:left"> Cooking Tools</span>
        </div>
        <div class="panel-body">
            <tool v-for="item in tools" v-bind:name="item"></tool>
        </div>
    </div>
    `
});

Vue.component('main-ing-list', {
    props: ['main_ings', 'amount', 'mode'],
    template: `<div class="panel panel-success">
      <div class="panel-heading">
            <span class="glyphicon glyphicon-apple" aria-hidden="true" style="margin-left:10px; font-weight:bold; font-size:1.3em; text-align:left"> Main Ingredients</span>
        </div>
      <div class="panel-body">
        <maining v-for="item in main_ings" v-bind:info="item" v-bind:amount="amount" v-bind:mode="mode"></maining>
      </div>
    </div>`
});


Vue.component('sub-ing-list', {
    props: ['sub_ings', 'amount', 'mode'],
    template: `<div class="panel panel-info">
      <div class="panel-heading">
            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" style="margin-left:10px; font-weight:bold; font-size:1.3em; text-align:left"> Extra Ingredients</span>
        </div>
      <div class="panel-body">
        <subing v-for="item in sub_ings" v-bind:info="item" v-bind:amount="amount" v-bind:mode="mode"></subing>
      </div>
    </div>`
});
