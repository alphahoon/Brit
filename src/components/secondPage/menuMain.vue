<template>
<div style="text-align:left;">
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="row">
                <h3 class="foodTitle">{{title}}</h3>
            </div>
            <div class="row">
                <img class="foodThumbnail" :src=imageLink />
            </div>
            <div class="cardContent">
                <div class="diffSection">
                    <span class="diffStr" :class="[difficulty == 'Easy' ? 'easy' : (difficulty == 'Normal' ? 'normal' : 'hard')]">{{difficulty}}</span>
                    <!--<span class="difficulty">Difficulty</span>-->
                    <!--<img :src=levelSrc alt="" class="levelStar" />-->
                </div>
                <div class="timeStr">
                    <span class="glyphicon glyphicon-time"></span>
                    <span class="lineline">{{time}} min</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['title', 'imageLink', 'level', 'time'],
    computed: {
        difficulty: function () {
            if (this.level == 0) {
                return 'Easy'
            } else if (this.level == 1) {
                return 'Normal'
            } else if (this.level == 2) {
                return 'Hard'
            }
        },
        levelSrc: function () {
            if (this.level == 0) {
                return 'assets/level1.png'
            } else if (this.level == 1) {
                return 'assets/level2.png'
            } else if (this.level == 2) {
                return 'assets/level3.png'
            }
        }
    }
}
</script>

<style scoped>
.panel {
    padding: 10px;
    margin-bottom: 20px;
}

img.foodThumbnail {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}

h3.foodTitle {
    margin: 0px;
    padding: 0px;
    text-align: center;
}

img.levelStar {
    height: 1.4em;
    border: None;
    vertical-align: middle;
    display: inline-block;
    margin-left: 10px;
}

div.menuMain {
    text-align: middle;
}

div.imageLink {
    margin-bottom: 10px;
}

h3 {
    margin-left: 10px;
    font-weight: bold;
    font-size: 2em;
    text-align: left;
    margin-top: 10px;
}

.cardContent {
  padding: 0;
  margin-top: 15px;
}

.diffStr {
    border: 2px solid grey;
    border-radius: 10px;
    padding: 5px 20px;
    font-weight: bold;
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

div.timeStr {
    display: inline-block;
    float: right;
    font-size: 1.4em;
}

div.diffSection {
    display: inline-block;
    font-size: 1.4em;
}
</style>
