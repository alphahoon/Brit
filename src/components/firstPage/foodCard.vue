<template>
<div id="foodCard">
    <div class="thumbnail"> <img :src="food.imageLink" :alt="food.title">
        <div class="caption"> <a href="#" @click="onFoodClick"><h6>{{food.title}}</h6></a> </div>
        <div class="cardContent"> {{difficulty}}
            <div class="timeStr">
                <span class="glyphicon glyphicon-time"></span>{{timeStr}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
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
    }
}
</script>

<style>

</style>
