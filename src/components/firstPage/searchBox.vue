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
                        All
                    </button>
                    <button class="btn btn-sm" :class="difficulty == 0 ? 'btn-default active ' : 'btn-default'" @click="onDifficultyChange(0)">
                        <img class="stars" src="assets/level1.png" alt="Easy" />
                    </button>
                    <button class="btn btn-sm" :class="difficulty == 1 ? 'btn-default active ' : 'btn-default'" @click="onDifficultyChange(1)">
                        <img class="stars" src="assets/level2.png" alt="Medium" />
                    </button>
                    <button class="btn btn-sm" :class="difficulty == 2 ? 'btn-default active ' : 'btn-default'" @click="onDifficultyChange(2)">
                        <img class="stars" src="assets/level3.png" alt="Hard" />
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
    font-weight: bold;
    text-align: left;
    margin-top: 10px
}

.search {
    width: 100%;
}

div.searchBtns {
    text-align: left
}

.time-slider {
    width: 100%;
}
</style>
