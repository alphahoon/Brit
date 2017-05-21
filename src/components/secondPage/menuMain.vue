<template>
<div style="text-align:left;">
    <div class="panel panel-default" style="padding-left:10px">
        <div class="panel-body">
            <div class="row" style="width: 90%; padding-right: 10px;">
                <h3>{{title}}</h3>
            </div>
            <div class="row" style="margin-bottom: 10px;">
                <img v-bind:src=imageLink style="width: 90%">
            </div>
            <div class="cardContent"> <img :src=levelSrc alt="" class="levelStar">
                <div class="timeStr">
                    <span class="glyphicon glyphicon-time"></span> <span class="lineline">{{time}} min</span>
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
                return 'Medium'
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
img.levelStar {
    height: 2em;
    border: None;
    vertical-align: middle;
    display: inline-block;
}

div.menuMain {
    text-align: middle;
}

div.imageLink {
    margin-bottom: 10px;
}


h3 {
    margin-left: 10px;
    font-weight:bold; 
    font-size:2em; 
    text-align:left;
    margin-top: 10px;
}

div.timeStr {
    display:inline-block;
    font-size: 1.2em;
    float: right;
    vertical-align: middle;

}
</style>
