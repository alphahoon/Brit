<template>
<div class="tableContainer">
    <div v-if="completed" class="done">
        <h1>Enjoy your meal! :)</h1>
    </div>
    <table>
        <tr>
            <th class="stepNumber">Step</th>
            <th class="firstPerson" v-if="participants.length >= 1">{{participants[0].name}}</th>
            <th class="secondPerson" v-if="participants.length >= 2">{{participants[1].name}}</th>
            <th class="thirdPerson" v-if="participants.length >= 3">{{participants[2].name}}</th>
            <th class="fourthPerson" v-if="participants.length >= 4">{{participants[3].name}}</th>
        </tr>
        <distStep v-for="(dist, index) in distList" :participants="participants" :dist="dist" :workList="workList" :remainList="remainList" :workCursor="workCursor" :index="index" @doneClick="doneClicked"></distStep>
    </table>
</div>
</template>

<script>
import distStep from './distStep.vue'

export default {
    props: ['participants', 'distList', 'workList'],
    data: function () {
        return {
            workCursor: 0,
            remainList: JSON.parse(JSON.stringify(this.distList))
        }
    },
    components: {
        distStep
    },
    computed: {
        completed: function () {
            for (var remains in this.remainList) {
                if (this.remainList[remains].length != 0)
                    return false
            }
            return true
        }
    },
    methods: {
        doneClicked: function (participantIndex, stepIndex) {
            this.remainList[stepIndex].splice(this.remainList[stepIndex].indexOf(participantIndex), 1)
            if (this.remainList[this.workCursor].length == 0) {
                this.workCursor++;
            }
        }
    }
}
</script>

<style scoped>
table,
tr,
th,
td {
    border: 1px solid white;
}

div.tableContainer {
    position: relative;
}

table {
    table-layout: fixed;
    width: 100%;
}

h1 {
    margin: 0;
    width: 100%;
    text-align: center;
    color: white;
}

div.done {
    z-index: 1;
    position: absolute;
    opacity: 1;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-weight: bold;
    display: flex;
    align-items: center;
}

th {
    text-align: center;
    font-size: 1.6em;
    font-weight: normal;
    color: white;
    padding: 10px;
}

th.stepNumber {
    width: 3em;
    color: #2c3e50;
}

.firstPerson {
    background: #2ecc71;
}

.secondPerson {
    background: #3498db;
}

.thirdPerson {
    background: #f1c40f;
}

.fourthPerson {
    background: #e74c3c;
}
</style>
