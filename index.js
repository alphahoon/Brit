var recipe = recipe;
var numPeople = 1;

var menu_main = new Vue({
  el: '#menu_main',
  data: {
    message: recipe.title,
    imageLink: recipe.imageLink,
    amount: numPeople
  },
  methods: {
    reduceAmount: function() {
      numPeople--;
      this.amount = numPeople;
    },
    addAmount: function() {
      numPeople++;
      this.amount = numPeople;
    }
  }
});

Vue.component('tool', {
  props: ['name'],
  template: '<div>{{ name }}</div>'
});

Vue.component('maining', {
  props: ['info', 'amount'],
  template: '<div>{{ info.name }} {{info.amount * amount}}{{ info.unit }}</div>'
});

Vue.component('subing', {
  props: ['info', 'amount'],
  amount: numPeople,
  template: '<div>{{ info.name }} {{info.amount * amount}}{{ info.unit }}<input type="checkbox"/></div>'
});

var tool_list = new Vue({
  el: "#tool_list",
  data: {
    tools: recipe.tools
  }
});

var main_ing_list = new Vue({
  el: '#main_ing_list',
  data: {
    main_ings: recipe.main,
    amount: numPeople
  }
});

var sub_ing_list = new Vue({
  el: '#sub_ing_list',
  data: {
    sub_ings: recipe.sub,
    amount: numPeople
  }
});
