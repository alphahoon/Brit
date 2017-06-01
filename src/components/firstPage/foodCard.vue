<template>
<div id="foodCard">
    <div class="thumbnail"> <a href="#" @click="onFoodClick"><img :src="food.imageLink" :alt="food.title" ></a>
        <div class="caption"> <a href="#" class="menuname" @click="onFoodClick">{{food.title}}</a> </div>
        <div class="cardContent">
            <div class="linelineline">
                <!--<img class="stars" :src="imgSrc" :alt="difficulty" />-->
                <span class="diffStr" :class="[difficulty == 'Easy' ? 'easy' : (difficulty == 'Normal' ? 'normal' : 'hard')]">{{difficulty}}</span>
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
            let min = this.food.time
            return min.toString() + ' mins'
        },
        difficulty: function () {
            if (this.food.level == 0) {
                return 'Easy'
            } else if (this.food.level == 1) {
                return 'Normal'
            } else if (this.food.level == 2) {
                return 'Hard'
            }
        },
        imgSrc: function () {
            if (this.food.level == 0) {
                return 'assets/level1.png'
            } else if (this.food.level == 1) {
                return 'assets/level2.png'
            } else if (this.food.level == 2) {
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
    display: inline-block;
    font-size: 2rem;
}

.caption {
    height: 4em;
}

.menuname {
    font-size: 2rem;
    color: #444;
    /*line-height: 1.5;*/
    /*margin-left: 10px;*/
    font-weight: bold;
    text-align: left
}

.difficulty {
    color: white;
    font-size: 1.5rem;
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
    height: 1em;
    width: 60px;
    border: None;
    display: inline-block;
    vertical-align: middle;
}

.diffStr {
    border: 2px solid grey;
    border-radius: 10px;
    padding: 5px 20px;
}

.easy {
    color: white;
    background: #27ae60;
    border-color: #27ae60;
}

.normal {
    color: white;
    background: #f39c12;
    border-color: #f39c12;
}

.hard {
    color: white;
    background: #e74c3c;
    border-color: #e74c3c;
}

.timeStr {
    vertical-align: middle;
    display: inline-block;
    float: right;
    padding-top: 5px;
}
</style>
