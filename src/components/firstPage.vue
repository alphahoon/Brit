<template>
<div>
    <h3>What do you want to have today? </h3>
    <div class="row" id="page1">
        <searchBox @queryChange="onQueryChange" @difficultyChange="onDifficultyChange" @timeChange="onTimeChange" :time="queryTime" :difficulty="queryDifficulty" :query="query"></searchBox>
        <food-list :foodList="filteredList" @foodClick="onFoodClick"></food-list>
    </div>
</div>
</template>

<script>
import foodList from './firstPage/foodList.vue'
import searchBox from './firstPage/searchBox.vue'

export default {
    data: function () {
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
        foodList,
        searchBox
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
    }
}
</script>

<style scoped>
h3 {
    text-align: center;
}
</style>
