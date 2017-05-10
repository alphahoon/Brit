let foodCard = {
    props: ['food'],
    computed: {
        timeStr: function () {
            let hour = this.food.time / 60
            let min = this.food.time % 60
            let str = ((hour === 0) ? hour + ' hrs ' : '') + min + ' mins'
            return str
        },
        difficulty: function () {
            if (this.food.level == 0) {
                return 'easy'
            } else if (this.food.level == 1) {
                return 'medium'
            } else if (this.food.level == 2) {
                return 'hard'
            }
        }
    },
    methods: {
        onFoodClick: function () {
            this.$emit('foodClick', this.food)
        }
    },
    template: `
    <div id="foodCard">
        <div class="thumbnail">
            <img v-bind:src="food.imgURL" v-bind:alt="food.foodName">
            <div class="caption">
                <a href="#" @click="onFoodClick"><h6>{{food.foodName}}</h6></a>
            </div>
            <div class="cardContent">
            {{difficulty}} <div class="timeStr"><span class="glyphicon glyphicon-time"></span>{{timeStr}}</div>
            </div>
        </div>
    </div>`
}

let foodList = {
    props: ['foodList'],
    components: {
        'food-card': foodCard
    },
    methods: {
        onFoodClick: function (food) {
            this.$emit('foodClick', food)
        }
    },
    template: `
    <div class="col-md-9">
        <div class="row inner">
            <food-card v-for="food in foodList" :food="food" :key="food.foodName" @foodClick="onFoodClick"></food-card>
        </div>
    </div>`
}
let searchbox = {
    template: `
    <div class="col-md-3">
        <div id="searchbox">
            <input v-bind:value="query" placeholder="Search" @input="onInputChange($event.target.value)"></input>
            <div class="btn-group " id="filterButtons" role="group">
                <button class="btn btn-sm" v-bind:class="level == 0 ? 'btn-primary ' : 'btn-default'" @click="onLevelChange(0)">Easy</button>
                <button class="btn btn-sm" v-bind:class="level == 1 ? 'btn-warning ' : 'btn-default'" @click="onLevelChange(1)">Medium</button>
                <button class="btn btn-sm" v-bind:class="level == 2 ? 'btn-danger ' : 'btn-default'" @click="onLevelChange(2)">Hard</button>
            </div>
        </div>
    </div>
    `,

    props:['level', 'query', 'time'],
    methods: {
        onInputChange: function (input) {
            this.$emit('queryChange', input)
        },
        onLevelChange: function (newLevel) {
            this.$emit('levelChange', newLevel)
        }
    }
}
let firstPage = {
    data: function () {
        return {
            foodList: [{ imgURL: './img/carbonara.png', foodName: 'Carbonara', level: 1, time: 30 },
            { imgURL: './img/o.jpg', foodName: 'Omelet with Rice', level: 1, time: 30 },
            { imgURL: './img/s.jpg', foodName: 'Samgyetang', level: 2, time: 70 },
            { imgURL: './img/w2.jpg', foodName: 'Spring Roll', level: 2, time: 30 },
            { imgURL: './img/carbonara.png', foodName: 'Carbonara', level: 2, time: 30 },
            { imgURL: './img/carbonara.png', foodName: 'Carbonara', level: 2, time: 30 },
            { imgURL: './img/carbonara.png', foodName: 'Carbonara', level: 2, time: 30 }
            ],
            query: '',
            queryLevel: 2,
            queryTime: 120,
        }    
    },
    computed: {
        filteredList: function () {
            let newList = this.foodList.filter(function (food) {
                return (food.foodName.includes(this.query)) && (food.level <= this.queryLevel) && (food.time <= this.queryTime)
            }.bind(this))
            console.log(newList)
            return newList
        }
    },
    components: {
        'food-list': foodList,
        'searchbox': searchbox
    },
    methods: {
        onFoodClick: function (food) {
            this.$emit('foodClick', food)
        },
        onQueryChange: function (query) {
            console.log(query)
            this.query = query
        },
        onLevelChange: function (level) {
            this.queryLevel = level 
        }
    },
    template: `
    <div>
    <h5 style="text-align:center">What do you want to have today? </h5>
        <div class="row" id="page1">
            <searchbox @queryChange="onQueryChange" @levelChange="onLevelChange" :level="queryLevel" :query="query"></searchbox>
            <food-list :foodList="filteredList" @foodClick="onFoodClick"></food-list>
        </div>
    </div>
    `
}

let secondPage = {
    props: ['numPeople'],
    data: function () {
        return {
            recipe: recipe
        };
    },
        template: `
        <div>
            <menu-main v-bind:title=recipe.title v-bind:amount=numPeople v-bind:imageLink=recipe.imageLink></menu-main>
            <br/>
            <tool-list v-bind:tools=recipe.tools></tool-list>
            <main-ing-list v-bind:amount=numPeople v-bind:main_ings=recipe.main></main-ing-list>
            <sub-ing-list v-bind:amount=numPeople v-bind:sub_ings=recipe.sub></sub-ing-list>
        </div>`
};

let participant = {
    props:['person', 'idx'],
    data: function () {
        return {
            name: ''
        }
    },
    template: `
    <div class="row participant">
        <span class="col-md-12">
            <form class="form-inline">
            {{idx + 1}}
            <span class="glyphicon glyphicon-user"></span>
            <input style="width: 55%" @input="onNameChange($event.target.value)" v-bind:value="person.name" v-bind:placeholder="person.key == 0 ? 'Me' : ''"></input>
            <div class="btn-group" role="group">
                <button class="btn btn-lg" v-bind:class="person.level == 0 ? 'btn-primary ' : 'btn-default'" @click="onLevelChange(0)">Beginner</button>
                <button class="btn btn-lg" v-bind:class="person.level == 1 ? 'btn-warning ' : 'btn-default'" @click="onLevelChange(1)">Intermediate</button>
                <button class="btn btn-lg" v-bind:class="person.level == 2 ? 'btn-danger ' : 'btn-default'" @click="onLevelChange(2)">Expert</button>
            </div>
            <button v-if="person.key != 0" class="btn btn-danger" @click="onRemove"><span class="glyphicon glyphicon-remove"></span></button> 
            </form>
        </span>
    </div>`,
    methods: {
        onNameChange: function (name) {
            this.$emit('nameChange', name, this.person)
        },
        onLevelChange: function (level) {
            this.$emit('levelChange', level, this.person)
        },
        onRemove: function () {
            this.$emit('remove', this.person)
        }
    }
}

let participants = {
    components: {
        'participant': participant
    },
    data: function () {
        return {
            currentKey: 1,
            participants: [{name: '', level: 0, key: 0}]
        }
    },
    template: `
    <div>
        <participant v-for="(person, idx) in participants" :person="person" :key="person.key" :idx="idx" @nameChange="onNameChange" @levelChange="onLevelChange" @remove="onRemove"></participant>
        <div class="row">
            <div class="col-md-12">
                <button id="addParticipant" class="btn btn-default" @click="onAddParticipant"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
            </div>
        </div>
    </div>`

    ,
    methods: {
        onNameSet: function (n) {
            console.log(n)
            this.name = n
        },
        onAddParticipant: function () {
            this.participants.push({ name: '', level: 0, key: this.currentKey })
            this.currentKey += 1
        },
        onNameChange: function (name, person) {
            person.name = name
        },
        onLevelChange: function (level, person) {
            person.level = level
        },
        onRemove: function (person) {
            let idx = this.participants.indexOf(person)
            this.participants.splice(idx, 1)
        }
    }
}


let thirdPage = {
    components: {
        'participants': participants
    },
    template: `
    <div>
    <participants></participants>
    </div>`       

}


let fourthPage = {
    data: function () {
        return {
            message: "Hello World!! 4"
        }
    },
    template: `
    <div>
        {{ message }}
    </div>`
}

let fifthPage = {
    data: function () {
        return {
            message: "Hello World!! 5"
        }
    },
    template: `
    <div>
        {{ message }}
    </div>`
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
    data: function () {
        return {
            pageCursor: 1,
            numPeople: 1
        }
    },
    components: {
        'first-page': firstPage,
        'second-page': secondPage,
        'third-page': thirdPage,
        'fourth-page': fourthPage,
        'fifth-page': fifthPage,
        'progress-bar': progressBar
    },
    methods: {
        onPrevClick: function () {
            if (this.pageCursor > 1) {
                this.pageCursor -= 1
            }
        },
        onNextClick: function () {
            if (this.pageCursor < 5) {
                this.pageCursor += 1
            }
        },
        onStepChange: function (i) {
            if (i > 0 && i < 6) {
                this.pageCursor = i
            }
        },
        onFoodClick: function (food) {
           this.pageCursor += 1
        }
    },
    template: `
    <div class="app">
        <header>
            <nav>
                <a id="cooky_logo" href="#">Cooky</a>
            </nav>
            <div id="progress_bar">
            <span>
                <a id="cooky_back" v-bind:class="pageCursor > 1? '': 'sarajo'" @click="onPrevClick"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a>
                <span id="progress-buttons"><progress-bar :pageCursor="pageCursor" @stepChange="onStepChange"></progress-bar></span>
                <a id="cooky_next" v-bind:class="pageCursor < 5? '': 'sarajo'" @click="onNextClick"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>
            </span>
            </div>
        </header>

        <!-- Container -->
        <div class="container">

            <first-page v-if="pageCursor == 1" @foodClick="onFoodClick"></first-page>
            <second-page v-else-if="pageCursor == 2" v-bind:numPeople=numPeople></second-page>
            <third-page v-else-if="pageCursor == 3"></third-page>
            <fourth-page v-else-if="pageCursor == 4"></fourth-page>
            <fifth-page v-else-if="pageCursor == 5"></fifth-page>
        </div>
    </div>`
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
            if (app.numPeople > 1) {
             app.numPeople--;
            }
        },
        addAmount: function() {
            if (app.numPeople < 10){
                app.numPeople++;
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