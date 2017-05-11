let foodCard = {
    props: ['food'],
    computed: {
        timeStr: function() {
            let hour = this.food.time / 60
            let min = this.food.time % 60
            let str = ((hour === 0) ? hour + ' hrs ' : '') + min + ' mins'
            return str
        },
        difficulty: function() {
            if (this.food.difficulty == 0) {
                return 'Easy'
            } else if (this.food.difficulty == 1) {
                return 'Medium'
            } else if (this.food.difficulty == 2) {
                return 'Hard'
            }
        }
    },
    methods: {
        onFoodClick: function() {
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
        onFoodClick: function(food) {
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
            <div class="row" style="font-weight:bold;text-align:left">
                <span>Search</span>
            </div>
            <div class="row">
                <input v-bind:value="query" placeholder="Search" @input="onInputChange($event.target.value)"></input>
            </div>
            <div class="row" style="font-weight:bold;text-align:left;margin-top:10px">
                <span>Difficulty</span>
            </div>
            <div class="row" style="text-align:left">
                <div class="btn-group " id="filterButtons" role="group">
                    <button class="btn btn-sm" v-bind:class="difficulty == 0 ? 'btn-primary ' : 'btn-default'" @click="onDifficultyChange(0)">Easy</button>
                    <button class="btn btn-sm" v-bind:class="difficulty == 1 ? 'btn-warning ' : 'btn-default'" @click="onDifficultyChange(1)">Medium</button>
                    <button class="btn btn-sm" v-bind:class="difficulty == 2 ? 'btn-danger ' : 'btn-default'" @click="onDifficultyChange(2)">Hard</button>
                </div>
            </div>
        </div>
    </div>
    `,

    props: ['difficulty', 'query', 'time'],
    methods: {
        onInputChange: function(input) {
            this.$emit('queryChange', input)
        },
        onDifficultyChange: function(newDifficulty) {
            this.$emit('difficultyChange', newDifficulty)
        }
    }
}
let firstPage = {
    data: function() {
        return {
            foodList: [{ imgURL: './img/carbonara.png', foodName: 'Carbonara', difficulty: 1, time: 30 },
                { imgURL: './img/o.jpg', foodName: 'Omelet with Rice', difficulty: 1, time: 30 },
                { imgURL: './img/s.jpg', foodName: 'Samgyetang', difficulty: 2, time: 70 },
                { imgURL: './img/w2.jpg', foodName: 'Spring Roll', difficulty: 2, time: 30 },
                { imgURL: './img/carbonara.png', foodName: 'Carbonara', difficulty: 2, time: 30 },
                { imgURL: './img/carbonara.png', foodName: 'Carbonara', difficulty: 2, time: 30 },
                { imgURL: './img/carbonara.png', foodName: 'Carbonara', difficulty: 2, time: 30 }
            ],
            query: '',
            queryDifficulty: 2,
            queryTime: 120,
        }
    },
    computed: {
        filteredList: function() {
            let newList = this.foodList.filter(function(food) {
                return (food.foodName.includes(this.query)) && (food.difficulty <= this.queryDifficulty) && (food.time <= this.queryTime)
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
        onFoodClick: function(food) {
            this.$emit('foodClick', food)
        },
        onQueryChange: function(query) {
            console.log(query)
            this.query = query
        },
        onDifficultyChange: function(difficulty) {
            this.queryDifficulty = difficulty
        }
    },
    template: `
    <div>
    <h3 style="text-align:center">What do you want to have today? </h3>
        <div class="row" id="page1">
            <searchbox @queryChange="onQueryChange" @difficultyChange="onDifficultyChange" :difficulty="queryDifficulty" :query="query"></searchbox>
            <food-list :foodList="filteredList" @foodClick="onFoodClick"></food-list>
        </div>
    </div>
    `
}

let secondPage = {
    props: ['numPeople'],
    data: function() {
        return {
            recipe: recipe
        };
    },
    template: `
        <div>
            <menu-main v-bind:title=recipe.title v-bind:amount=numPeople v-bind:imageLink=recipe.imageLink></menu-main>
            <div class="row" style="height:300px;margin-top: 20px;padding-left:10%">
                <tool-list v-bind:tools=recipe.tools></tool-list>
                <main-ing-list v-bind:amount=numPeople v-bind:main_ings=recipe.main></main-ing-list>
                <sub-ing-list v-bind:amount=numPeople v-bind:sub_ings=recipe.sub></sub-ing-list>
            </div>
        </div>`
};

let participant = {
    props: ['person', 'idx'],
    data: function() {
        return {
            name: ''
        }
    },
    template: `
    <div class="row participant">
        <span class="col-md-12">
            <form class="form-inline">
            <span style="font-size:1.5em;">{{idx + 1}} </span>
            <span class="glyphicon glyphicon-user" style="font-size:1.5em;"> </span>
            <input style="width: 40%; margin-left:10px; margin-right:10px;padding-left:10px;padding-right:10px" @input="onNameChange($event.target.value)" v-bind:value="person.name" v-bind:placeholder="person.key == 0 ? 'Me' : ''"></input>
            <div class="btn-group " role="group">
                <button class="btn btn-lg" v-bind:class="person.level == 0 ? 'btn-primary ' : 'btn-default'" @click.prevent="onLevelChange(0)">Beginner</button>
                <button class="btn btn-lg" v-bind:class="person.level == 1 ? 'btn-warning ' : 'btn-default'" @click.prevent="onLevelChange(1)">Intermediate</button>
                <button class="btn btn-lg" v-bind:class="person.level == 2 ? 'btn-danger ' : 'btn-default'" @click.prevent="onLevelChange(2)">Expert</button>
            </div>
            <button v-if="person.key != 0" class="btn btn-danger" @click="onRemove"><span class="glyphicon glyphicon-remove"></span></button> 
            </form>
        </span>
    </div>`,
    methods: {
        onNameChange: function(name) {
            this.$emit('nameChange', name, this.idx)
        },
        onLevelChange: function(level) {
            console.log('onLevelChange')
            this.$emit('levelChange', level, this.idx)
        },
        onRemove: function() {
            this.$emit('remove', this.idx)
        }
    }
}

let participants = {
    components: {
        'participant': participant
    },
    data: function() {
        return {
            currentKey: 1,
            participants: [{ name: '', level: 0, key: 0 }]
        }
    },
    template: `
    <div>
        <participant v-for="(person, idx) in participants" :person="person" :key="person.key" :idx="idx" @nameChange="onNameChange" @levelChange="onLevelChange" @remove="onRemove"></participant>
        <div class="row">
            <div class="col-md-12" style="margin-top: 20px;text-align: center;">
                <button v-if="participants.length < 4" currentKeyid="addParticipant" class="btn btn-default btn-lg" @click="onAddParticipant"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                <button v-if="participants.length == 4" class="btn btn-default btn-lg btn-primary" style="font-weight:bold;" @click="onNextClick">Next<span class="glyphicon glyphicon-arrow-right" aria-hidden="true" style="margin-left:10px"></span></button>
            </div>
        </div>
    </div>`

    ,
    methods: {
        onNameSet: function(n) {
            console.log(n)
            this.name = n
        },
        onAddParticipant: function() {
            this.participants.push({ name: '', level: 0, key: this.currentKey })
            this.currentKey += 1
        },
        onNameChange: function(name, idx) {
            this.participants[idx].name = name
        },
        onLevelChange: function(level, idx) {
            this.participants[idx].level = level
        },
        onRemove: function(idx) {
            // let idx = this.participants.indexOf(person)
            this.participants.splice(idx, 1)
        },
        onNextClick: function() {
            this.$emit('nextClick')
        }
    }
}


let thirdPage = {
    components: {
        'participants': participants
    },
    template: `
    <div>
        <participants @nextClick="onNextClick"></participants>
    </div>`,
    methods: {
        onNextClick: function() {
            this.$emit('nextClick')
        }
    }
}


let fourthPage = {
    data: function() {
        return {
            message: "Distribute View"
        }
    },
    template: `
    <div>
        {{ message }}
    </div>`
}

let fifthPage = {
    data: function() {
        return {
            message: "Result View"
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
        onStepClick: function(i) {
            this.$emit('stepChange', i)
        }
    }
}

let app = new Vue({
    el: '#app',
    data: function() {
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
        onLogoClick: function() {
            location.reload()
        },
        onPrevClick: function() {
            if (this.pageCursor > 1) {
                this.pageCursor -= 1
            }
        },
        onNextClick: function() {
            if (this.pageCursor < 5) {
                this.pageCursor += 1
            }
        },
        onStepChange: function(i) {

            if (i > 0 && i < 6) {
                this.pageCursor = i
            }

            // if (i < this.pageCursor)
            //     this.pageCursor -= 1
            // else if (i > this.pageCursor)
            //     this.pageCursor += 1
            // else {
            //     this.pageCursor = i
            // }
        },
        onFoodClick: function(food) {
            this.pageCursor = 2
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

        <!-- Container -->
        <div class="container">

            <first-page v-if="pageCursor == 1" @foodClick="onFoodClick"></first-page>
            <second-page v-else-if="pageCursor == 2" v-bind:numPeople=numPeople></second-page>
            <third-page v-else-if="pageCursor == 3" @nextClick="onNextClick"></third-page>
            <fourth-page v-else-if="pageCursor == 4"></fourth-page>
            <fifth-page v-else-if="pageCursor == 5"></fifth-page>
        </div>
    </div>`
});

// sketch2
Vue.component('menu-main', {
    props: ['title', 'imageLink', 'amount'],
    template: `<div style="text-align:center">
        <div class="row">
            <h3>{{title}}</h3>
        </div>
        <div class="row" style="margin-bottom: 10px;">
            <img v-bind:src=imageLink width='300' height='200'>
        </div>
        <div class="row">
            <span style="font-size:1.5em; font-weight:bold"> Serving Amount : </span>
            <button v-on:click="reduceAmount" class="btn btn-xs btn-danger glyphicon glyphicon-minus servingAdjust" aria-hidden="true"/>
            <span style="font-weight:bold;font-size:1.5em"> {{amount}} </span>
            <button v-on:click="addAmount" class="btn btn-xs btn-danger glyphicon glyphicon-plus servingAdjust" aria-hidden="true"/>
        </div>
    </div>`,
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
    template: '<div>{{ name }}</div>'
});

Vue.component('maining', {
    props: ['info', 'amount'],
    template: '<div><span>{{ info.name }}</span> <span style="color:#8BC34A">{{info.amount * amount}}{{ info.unit }}</span></div>'
});

Vue.component('subing', {
    props: ['info', 'amount'],
    template: '<div><input type="checkbox" style="margin-right:10px"/>{{ info.name }} <span style="color:#00BCD4">{{info.amount * amount}}{{ info.unit }}</span></div>'
});

Vue.component('tool-list', {
    props: ['tools'],
    template: `<div class="col-sm-3 panel panel-warning">
          <div class="panel-heading">
            <span class="glyphicon glyphicon-cutlery" aria-hidden="true" style="margin-left:10px"> Cooking Tools</span>
          </div>
          <div class="panel-body">
            <tool v-for="item in tools" v-bind:name="item"></tool>
          </div>
        </div>`
});

Vue.component('main-ing-list', {
    props: ['main_ings', 'amount'],
    template: `<div class="col-sm-4 panel panel-success">
      <div class="panel-heading">
            <span class="glyphicon glyphicon-apple" aria-hidden="true" style="margin-left:10px"> Main Ingredients</span>
        </div>
      <div class="panel-body">
        <maining v-for="item in main_ings" v-bind:info="item" v-bind:amount="amount"></maining>
      </div>
    </div>`
});


Vue.component('sub-ing-list', {
    props: ['sub_ings', 'amount'],
    template: `<div class="col-sm-3 panel panel-info">
      <div class="panel-heading">
            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" style="margin-left:10px"> Extra Ingredients</span>
        </div>
      <div class="panel-body">
        <subing v-for="item in sub_ings" v-bind:info="item" v-bind:amount="amount"></subing>
      </div>
    </div>`
});
