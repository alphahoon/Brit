<template>
<div class="col-md-6">
    <h1>Current Contributions</h1>
    <div class="graphArea">
        <div v-if="participants.length >= 1" class="personOne row">
            <h4>{{participants[0].name}}
                <span class="thumbsUp" v-if="getPercentage(0) > 20">👍🏻</span>
                <span class="thumbsUp" v-if="getPercentage(0) > 50">👍🏻</span>
                <span class="thumbsUp" v-if="getPercentage(0) > 80">👍🏻</span>
            </h4></div>
        <div v-if="participants.length >= 1" class="chart chartOne row" :style="{ width: chartOneWidth + '%'}">
            <h5>{{getPercentage(0)}}%</h5></div>
        <div v-if="participants.length >= 2" class="personTwo row">
            <h4>{{participants[1].name}}
                <span class="thumbsUp" v-if="getPercentage(1) > 20">👍🏻</span>
                <span class="thumbsUp" v-if="getPercentage(1) > 50">👍🏻</span>
                <span class="thumbsUp" v-if="getPercentage(1) > 80">👍🏻</span>
            </h4></div>
        <div v-if="participants.length >= 2" class="chart chartTwo row" :style="{ width: chartTwoWidth + '%'}">
            <h5>{{getPercentage(1)}}%</h5></div>
        <div v-if="participants.length >= 3" class="personThree row">
            <h4>{{participants[2].name}}
                <span class="thumbsUp" v-if="getPercentage(2) > 20">👍🏻</span>
                <span class="thumbsUp" v-if="getPercentage(2) > 50">👍🏻</span>
                <span class="thumbsUp" v-if="getPercentage(2) > 80">👍🏻</span>
            </h4></div>
        <div v-if="participants.length >= 3" class="chart chartThree row" :style="{ width: chartThreeWidth + '%'}">
            <h5>{{getPercentage(2)}}%</h5></div>
        <div v-if="participants.length >= 4" class="personFour row">
            <h4>{{participants[3].name}}
                <span class="thumbsUp" v-if="getPercentage(3) > 20">👍🏻</span>
                <span class="thumbsUp" v-if="getPercentage(3) > 50">👍🏻</span>
                <span class="thumbsUp" v-if="getPercentage(3) > 80">👍🏻</span>
            </h4></div>
        <div v-if="participants.length >= 4" class="chart chartFour row" :style="{ width: chartFourWidth + '%'}">
            <h5>{{getPercentage(3)}}%</h5></div>
        <span class="totalTime">Total Time : {{totalTime}} min <span class="saved">(You're saving {{savedTime}} min!)</span></span>
    </div>
</div>
</template>

<script>
export default {
    props: ['participants', 'distList', 'workList'],
    data: function () {
        return {
            chartWidth: 90
        }
    },
    computed: {
        totalPoints: function () {
            var total = 0
            for (var step in this.workList) {
                total += (this.workList[step].difficulty + 1) * this.workList[step].time
            }
            return total
        },
        totalTime: function () {
            var total = 0
            for (var step in this.workList) {
                if (this.distList[step].length == 0)
                    total += this.workList[step].time
                else
                    total += Math.round((this.workList[step].time / this.distList[step].length) * 10) / 10
            }
            total = Math.round(total * 10) / 10
            this.$store.commit('setTotalTime', {
                totalTime: total
            })
            return total
        },
        savedTime: function () {
            var saved = 0
            var total = 0
            var currentTime = this.totalTime
            for (var step in this.workList)
                total += this.workList[step].time
            var saved = Math.round((total - currentTime) * 10 ) / 10
            return saved
        },
        contribution: function () {
            var values = [0, 0, 0, 0];
            for (var step in this.distList) {
                for (var index in this.distList[step]) {
                    var personIndex = this.distList[step][index]
                    values[personIndex] += (this.workList[step].difficulty + 1) * this.workList[step].time
                }
            }
            for (var valueIndex in values) {
                values[valueIndex] = (values[valueIndex] * 100) / this.totalPoints
            }
            return values
        },
        chartOneWidth: function () {
            return Math.round((this.contribution[0] * this.chartWidth / 100) * 10) / 10
        },
        chartTwoWidth: function () {
            return Math.round((this.contribution[1] * this.chartWidth / 100) * 10) / 10
        },
        chartThreeWidth: function () {
            return Math.round((this.contribution[2] * this.chartWidth / 100) * 10) / 10
        },
        chartFourWidth: function () {
            return Math.round((this.contribution[3] * this.chartWidth / 100) * 10) / 10
        }
    },
    methods: {
        getPercentage: function (index) {
            return Math.round(this.contribution[index] * 10) / 10
        }
    }
}
</script>

<style scoped>
h1 {
    position: fixed;
    top: 14%;
    left: 50%;
    padding-left: 2em;
}

.graphArea {
    position: fixed;
    border: 4px solid #ecf0f1;
    background: white;
    top: 19%;
    left: 50%;
    width: 45%;
    height: 55%;
    padding-left: 1em;
    margin: 2em;
    z-index: 1;
}

h4 {
    margin-left: 1em;
    margin-right: 1em;
}

.thumbsUp {
    margin-left: 5px;
}

.chartArea {
    height: 100%;
}

.chart {
    min-width: 45px;
    height: 45px;
    border-radius: 45px;
    margin-left: 1em;
    padding-left: 1em;
    padding-right: 1em;
    display: inline-block;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
    display: flex;
    align-items: center;
    -webkit-transition: width 0.5s, -webkit-transform 0.5s;
    transition: width 0.5s;
}

h5 {
    margin: 0;
    width: 100%;
    color: white;
    text-align: center;
}

.chartOne {
    background: #2ecc71;
}

.chartTwo {
    background: #3498db;
}

.chartThree {
    background: #f1c40f;
}

.chartFour {
    background: #e74c3c;
}

.totalTime {
    position: absolute;
    bottom: -30px;
    right: 10px;
    font-weight: bold;
    font-size: 1.2em;
}

.saved {
    color: #1abc9c;
}
</style>
