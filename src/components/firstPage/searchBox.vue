<template>
<div class="col-md-3">
    <div id="searchBox">
        <div class="row searchTitle">
            <span>Search</span>
        </div>
        <div class="row">
            <input :value="query" placeholder="Search" @input="onInputChange($event.target.value)"></input>
        </div>
        <div class="row difficultyTitle">
            <span>Difficulty</span>
        </div>
        <div class="row searchBtns">
            <div class="btn-group " id="filterButtons" role="group">
                <button class="btn btn-sm" :class="difficulty == 0 ? 'btn-success ' : 'btn-default'" @click="onDifficultyChange(0)">Easy</button>
                <button class="btn btn-sm" :class="difficulty == 1 ? 'btn-warning ' : 'btn-default'" @click="onDifficultyChange(1)">Medium</button>
                <button class="btn btn-sm" :class="difficulty == 2 ? 'btn-danger ' : 'btn-default'" @click="onDifficultyChange(2)">Hard</button>
                <button class="btn btn-sm" :class="difficulty == 3 ? 'btn-primary ' : 'btn-default'" @click="onDifficultyChange(3)">See All</button>
            </div>
            <div>
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
div.searchTitle {
    font-weight: bold;
    text-align: left
}

div.difficultyTitle {
    font-weight: bold;
    text-align: left;
    margin-top: 10px
}

div.searchBtns {
    text-align: left
}
</style>
