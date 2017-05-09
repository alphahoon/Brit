Vue.component('menu-main', {
	props: ['title', 'imageLink', 'amount'],
	template: `<div>
		<div><h4>{{title}}</h4></div>
		<div><img v-bind:src=imageLink width='100' height='60'></div>
		<div><button v-on:click="reduceAmount">-</button> {{amount}} <button v-on:click="addAmount">+</button>명이 먹을거에요!</div>
		</div>`,
		methods: {
	   reduceAmount: function() {
		  },
		  addAmount: function() {
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
  template: '<div>{{ info.name }} {{info.amount * amount}}{{ info.unit }}<input type="checkbox"/></div>'
});

Vue.component('tool-list', {
	props: [ 'tools' ],
	template: `<div>
			<tool v-for="item in tools" v-bind:name="item"></tool>
	</div>`
});

Vue.component('main-ing-list', {
	props: ['main_ings', 'amount'],
	template: `	<div>
			<maining v-for="item in main_ings" v-bind:info="item" v-bind:amount="amount"></maining>
		</div>`
});

Vue.component('sub-ing-list', {
	props: ['sub_ings', 'amount'],
	template: `	<div>
			<subing v-for="item in sub_ings" v-bind:info="item" v-bind:amount="amount"></subing>
		</div>`
});


var app2 = new Vue({
  el: '#app2',
	data: {
		recipe: recipe,
		numPeople: 1
	},
	template: `
	<div>
	<menu-main v-bind:title=recipe.title v-bind:amount=numPeople v-bind:imageLink=recipe.imageLink></menu-main>
	<tool-list v-bind:tools=recipe.tools></tool-list>
	<main-ing-list v-bind:amount=numPeople v-bind:main_ings=recipe.main></main-ing-list>
	<sub-ing-list v-bind:amount=numPeople v-bind:sub_ings=recipe.sub></sub-ing-list>
	</div>
	`
});
