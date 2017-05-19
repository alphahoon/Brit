<template>
<div class="col-md-9">
    <div class="row inner">
        <food-card v-for="food in foodList" :food="food" :key="food.title" @foodClick="onFoodClick"></food-card>
    </div>
</div>
</template>

<script>
import foodCard from './foodCard.vue'

export default {
    props: ['foodList'],
    components: {
        foodCard
    },
    methods: {
        onFoodClick: function (food) {
            this.$emit('foodClick', food)
        }
    }
}
</script>

<style>

</style>
