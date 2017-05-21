<template>
<div id="foodCard">
    <div class="thumbnail"> <a href="#" @click="onFoodClick"><img :src="food.imageLink" :alt="food.title" ></a>
        <div class="caption"> <a href="#" class="menuname" @click="onFoodClick">{{food.title}}</a> </div>
        <div class="cardContent"> 
            <!--<button class="btn btn-sm" :class="bgColor">
                {{difficulty}}
            </button>-->
            <div class="linelineline">
                <img class="stars" :src="imgSrc" :alt="difficulty"/>
                <div class="timeStr">
                    <span class="glyphicon glyphicon-time"></span>
                    <span class="lineline">{{timeStr}}</span>
                    </div>
            </div>
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
        },
        imgSrc: function(){
            if(this.food.level == 0){
                return 'assets/level1.png'
            } else if(this.food.level == 1){
                return 'assets/level2.png'
            } else if (this.food.level == 2){
                return 'assets/level3.png'
            }
        },
        bgColor: function () {
            if (this.food.level == 0) {
                return 'btn-success'
            } else if (this.food.level == 1) {
                return 'btn-warning'
            } else if (this.food.level == 2) {
                return 'btn-danger'
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
#foodCard {
	/*background: #fefefe;
	border: 2px solid #fcfcfc;
	box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);*/
	/*margin: 0 2px 15px;
	padding: 15px;
	padding-bottom: 10px;*/
	/*transition: opacity .4s ease-in-out;*/
    display: inline-block;
}

/*#foodCard .thumbnail {
	width: 100%; height: auto;
	border-bottom: 1px solid #ccc;
	padding-bottom: 15px;
	margin-bottom: 5px;
}*/

.menuname{
    font-size: 1.4rem;
	color: #444;
    /*line-height: 1.5;*/
    /*margin-left: 10px;*/
    font-weight:bold; 
    text-align:left
}

.difficulty{
    color: white;

}
.bg-success {
    background: #2ecc71;
}

.bg-warning {
    background: #f1c40f;
}

.bg-danger {
    background: #e74c3c;
}

.stars {
    width: 50px;
    border: None;
    display:inline-block;
    vertical-align:middle;
}
/*.linelineline{
    vertical-align: middle;
}*/

.timeStr {
    vertical-align:middle;
    display:inline-block;
    float: right;
}
</style>
