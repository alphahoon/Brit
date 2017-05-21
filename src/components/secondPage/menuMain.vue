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
                    <h5><span class="glyphicon glyphicon-time"></span> {{time}} min</h5>
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
    height: 25px;
    border: None;
}

div.menuMain {
    text-align: center;
}

div.imageLink {
    margin-bottom: 10px;
}


h3 {
    margin-top: 10px;
}

div.timeStr {
    float: right;
}
</style>
