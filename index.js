var page_cursor = 1;

$(document).ready(function() {
	refreshContents();

	$('#cooky_back').on("click",function(){
	  page_cursor--;
	  refreshContents();
	});
	$('#cooky_next').on("click",function(){
	  page_cursor++;
	  refreshContents();
	});
});

function refreshContents() {
	hideAll();
	showPage(page_cursor);
	displayBackNext();
}

function hideAll() {
	for (var index = 1; index <= 5; index++) {
		var id = '#app-' + index;
		$(id).hide();
	}
}

function showPage(index) {
	var id = '#app-' + index;
	$(id).show();
}

function displayBackNext() {
	// Back Button
	if (page_cursor == 1)
		$('#cooky_back').hide();
	else
		$('#cooky_back').show();

	// Next Button
	if (page_cursor == 5)
		$('#cooky_next').hide();
	else
		$('#cooky_next').show();
}

var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'First Page'
    }
});


// sketch2
Vue.component('menu-main', {
	props: ['title', 'imageLink', 'amount'],
	template: `<div>
		<div><h4>{{title}}</h4></div>
		<div><img v-bind:src=imageLink width='280' height='180'>
		<button v-on:click="reduceAmount" class="glyphicon glyphicon-minus" aria-hidden="true"/>
		 {{amount}}
		<button v-on:click="addAmount" class="glyphicon glyphicon-plus" aria-hidden="true"/>
		명이 먹을거에요!</div>
	</div>`,
	methods: {
	  reduceAmount: function() {
			if (app2.numPeople > 1) {
			 app2.numPeople--;
			}
		},
		addAmount: function() {
			if (app2.numPeople < 10){
				app2.numPeople++;
			}
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
  template: '<div>{{ info.name }} {{info.amount * amount}}{{ info.unit }} <input type="checkbox"/></div>'
});

Vue.component('tool-list', {
	props: [ 'tools' ],
	template: `<div class="panel panel-warning">
		  <div class="panel-heading">
		    <span class="glyphicon glyphicon-cutlery" aria-hidden="true">도구</span>
		  </div>
		  <div class="panel-body">
		    <tool v-for="item in tools" v-bind:name="item"></tool>
		  </div>
		</div>`
});

Vue.component('main-ing-list', {
	props: ['main_ings', 'amount'],
	template: `<div class="panel panel-success">
	  <div class="panel-heading">
			<span class="glyphicon glyphicon-apple" aria-hidden="true">주재료</span>
		</div>
	  <div class="panel-body">
	    <maining v-for="item in main_ings" v-bind:info="item" v-bind:amount="amount"></maining>
	  </div>
	</div>`
});

Vue.component('sub-ing-list', {
	props: ['sub_ings', 'amount'],
	template: `<div class="panel panel-info">
	  <div class="panel-heading">
			<span class="glyphicon glyphicon-plus-sign" aria-hidden="true">추가재료</span>
		</div>
	  <div class="panel-body">
	    <subing v-for="item in sub_ings" v-bind:info="item" v-bind:amount="amount"></subing>
	  </div>
	</div>`
});


var app2 = new Vue({
  el: '#app-2',
	data: {
		recipe: recipe,
		numPeople: 1
	},
	template: `
	<div>
		<menu-main v-bind:title=recipe.title v-bind:amount=numPeople v-bind:imageLink=recipe.imageLink></menu-main>
		<br/>
		<tool-list v-bind:tools=recipe.tools></tool-list>
		<main-ing-list v-bind:amount=numPeople v-bind:main_ings=recipe.main></main-ing-list>
		<sub-ing-list v-bind:amount=numPeople v-bind:sub_ings=recipe.sub></sub-ing-list>
	</div>
	`
});


var app3 = new Vue({
    el: '#app-3',
    data: {
        message: 'Third Page'
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        message: 'Fourth Page'
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Fifth Page'
    }
});
