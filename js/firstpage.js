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
                return 'Easy'
            } else if (this.food.level == 1) {
                return 'Medium'
            } else if (this.food.level == 2) {
                return 'Hard'
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
        <div class="thumbnail"> <img v-bind:src="food.imageLink" v-bind:alt="food.title">
            <div class="caption"> <a href="#" @click="onFoodClick"><h6>{{food.title}}</h6></a> </div>
            <div class="cardContent"> {{difficulty}}
                <div class="timeStr">
                    <span class="glyphicon glyphicon-time"></span>{{timeStr}}</div>
            </div>
        </div>
    </div>
    `
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
            <food-card v-for="food in foodList" :food="food" :key="food.title" @foodClick="onFoodClick"></food-card>
        </div>
    </div>
    `
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
                    <button class="btn btn-sm" v-bind:class="difficulty == 0 ? 'btn-success ' : 'btn-default'" @click="onDifficultyChange(0)">Easy</button>
                    <button class="btn btn-sm" v-bind:class="difficulty == 1 ? 'btn-warning ' : 'btn-default'" @click="onDifficultyChange(1)">Medium</button>
                    <button class="btn btn-sm" v-bind:class="difficulty == 2 ? 'btn-danger ' : 'btn-default'" @click="onDifficultyChange(2)">Hard</button>
                    <button class="btn btn-sm" v-bind:class="difficulty == 3 ? 'btn-primary ' : 'btn-default'" @click="onDifficultyChange(3)">See All</button> 
                </div>
                <div>
                    <input type="range" min="5" max="120" :value="time" @input="onTimeChange($event.target.value)"></input>
                </div>
            </div>
        </div>
    </div>
    `,

    props: ['difficulty', 'query', 'time'],
    methods: {
        onInputChange: function (input) {
            this.$emit('queryChange', input)
        },
        onDifficultyChange: function (newDifficulty) {
            this.$emit('difficultyChange', newDifficulty)
        },
        onTimeChange: function (newTime) {
            this.$emit('timeChange', newTime)
        }
    }
}
let firstPage = {
    data: function() {
        return {
            queryDifficulty: 3,
            queryTime: 120,
            query: ''
        }
    },
    computed: {
        foodList: function () {
            return recipes
        },
        filteredList: function () {
            let newList = this.queryDifficulty == 3 ?
                this.foodList.filter(function (food) {
                    return (food.title.includes(this.query)) && (food.time <= this.queryTime)
                }.bind(this)) :
                this.foodList.filter(function (food) {
                    return (food.title.includes(this.query)) && (food.level == this.queryDifficulty) && (food.time <= this.queryTime)
                }.bind(this))
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
            this.query = query
        },
        onDifficultyChange: function (difficulty) {
            this.queryDifficulty = difficulty
        }, 
        onTimeChange: function (time) {
            this.queryTime = time
        }
    },
    template: `
    <div>
        <h3 style="text-align:center">What do you want to have today? </h3>
        <div class="row" id="page1">
            <searchbox @queryChange="onQueryChange" @difficultyChange="onDifficultyChange" @timeChange="onTimeChange" :time="queryTime" :difficulty="queryDifficulty" :query="query"></searchbox>
            <food-list :foodList="filteredList" @foodClick="onFoodClick"></food-list>
        </div>
    </div>
    `
}