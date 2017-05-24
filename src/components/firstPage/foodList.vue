<template>
<div class="col-md-9 col-md-offset-3">
    <div class="row">
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

<style scoped>

</style>
