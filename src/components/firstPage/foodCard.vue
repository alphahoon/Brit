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

<style scoped>
#food-card {
	background: #fefefe;
	border: 2px solid #fcfcfc;
	box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
	margin: 0 2px 15px;
	padding: 15px;
	padding-bottom: 10px;
	transition: opacity .4s ease-in-out;
    display: inline-block;
}

#food-card thumbnail {
	width: 100%; height: auto;
	border-bottom: 1px solid #ccc;
	padding-bottom: 15px;
	margin-bottom: 5px;
}

#food-card caption{
  font-size: .9rem;
	color: #444;
  line-height: 1.5;
}

div#columns:hover figure:not(:hover) {
	opacity: 0.4;
}
</style>
