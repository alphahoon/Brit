<template>
<div class="col-md-3">
    <div class="panel panel-primary">
        <div class="panel-heading">
            Filter
        </div>
        <div class="form-group panel-body">
            <div class="title">
                <span>Search</span>
            </div>
            <div class="">
                <input class="search" :value="query" placeholder="Search" @input="onInputChange($event.target.value)"></input>
            </div>
            <div class="title">
                <span>Difficulty</span>
            </div>
            <div class="searchBtns">
                <div class="btn-group " id="filterButtons" role="group">
                    <button class="btn btn-sm" :class="difficulty == 3 ? 'btn-default active ' : 'btn-default'" @click="onDifficultyChange(3)">
                        <span class="diffStr all">All</span>
                    </button>
                    <button class="btn btn-sm" :class="difficulty == 0 ? 'btn-default active ' : 'btn-default'" @click="onDifficultyChange(0)">
                        <!--<img class="stars" src="assets/level1.png" alt="Easy" />-->
                        <span class="diffStr easy">Easy</span>
                    </button>
                    <button class="btn btn-sm" :class="difficulty == 1 ? 'btn-default active ' : 'btn-default'" @click="onDifficultyChange(1)">
                        <!--<img class="stars" src="assets/level2.png" alt="Medium" />-->
                        <span class="diffStr normal">Normal</span>
                    </button>
                    <button class="btn btn-sm" :class="difficulty == 2 ? 'btn-default active ' : 'btn-default'" @click="onDifficultyChange(2)">
                        <!--<img class="stars" src="assets/level3.png" alt="Hard" />-->
                        <span class="diffStr hard">Hard</span>
                    </button>
                </div>
            </div>
            <div class="title">
                <span>Time: {{ time }} min</span>
            </div>
            <div class="time-slider">
                <input type="range" min="5" max="120" :value="time" @input="onTimeChange($event.target.value)"></input>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
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
</script>

<style scoped>
.stars {
    height: 1em;
    width: 40px;
    border: None;
    display: inline-block;
    vertical-align: middle;
}

.title {
    font-size:2rem;
    font-weight: bold;
    text-align: left;
    margin-top: 10px
}

.search {
    width: 100%;
}

.searchBtns > .btn-group > .btn {
    padding: 10px;
    text-align: center;
}

.diffStr {
    font-size: 1.5rem;
    font-weight: bold;
}

.easy {
    color: #27ae60;
}

.normal {
    color: #f39c12;
}

.hard {
    color: #e74c3c;
}

div.searchBtns {
    text-align: left
}

.time-slider {
    width: 100%;
}

.panel-heading {
    font-size: 2.5rem;
}
</style>
