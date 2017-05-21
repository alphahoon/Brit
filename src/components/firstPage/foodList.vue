<template>
<div class="col-md-9 col-md-offset-3">
    <div class="row columns">
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
.columns {
	column-width: 33%;
	column-gap: 15px;
    width: 90%;
	max-width: 1100px;
	margin: 50px auto;
}

</style>
