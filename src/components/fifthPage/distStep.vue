<template>
<tr :class="[isActive ? activeClass : '', errorClass]">
    <td class="stepNumber">{{index + 1}}</td>
    <td class="firstPerson" v-if="participants.length >= 1">
        <div class="done" v-if="!oneFinished && isActive" @click="onDoneClicked(0, index)">
            <h3>Done!</h3></div>
        <span v-if="oneHasWork" :class="[oneFinished ? doneStep : '', undoneStep]">{{workList[index].text}}</span>
    </td>
    <td class="secondPerson" v-if="participants.length >= 2">
        <div class="done" v-if="!twoFinished && isActive" @click="onDoneClicked(1, index)">
            <h3>Done!</h3></div>
        <span v-if="twoHasWork" :class="[twoFinished ? doneStep : '', undoneStep]">{{workList[index].text}}</span>
    </td>
    <td class="thirdPerson" v-if="participants.length >= 3">
        <div class="done" v-if="!threeFinished && isActive" @click="onDoneClicked(2, index)">
            <h3>Done!</h3></div>
        <span v-if="threeHasWork" :class="[threeFinished ? doneStep : '', undoneStep]">{{workList[index].text}}</span>
    </td>
    <td class="fourthPerson" v-if="participants.length >= 4">
        <div class="done" v-if="!fourFinished && isActive" @click="onDoneClicked(3, index)">
            <h3>Done!</h3></div>
        <span v-if="fourHasWork" :class="[fourFinished ? doneStep : '', undoneStep]">{{workList[index].text}}</span>
    </td>
</tr>
</template>

<script>
export default {
    props: ['participants', 'workList', 'remainList', 'dist', 'index', 'workCursor'],
    data: function () {
        return {
            activeClass: 'currentStep',
            errorClass: 'disabledStep',
            undoneStep: 'undoneStep',
            doneStep: 'doneStep',
        }
    },
    computed: {
        isActive: function () {
            return this.workCursor == this.index
        },
        oneHasWork: function () {
            return this.dist.indexOf(0) != -1
        },
        twoHasWork: function () {
            return this.dist.indexOf(1) != -1
        },
        threeHasWork: function () {
            return this.dist.indexOf(2) != -1
        },
        fourHasWork: function () {
            return this.dist.indexOf(3) != -1
        },
        oneFinished: function () {
            return this.remainList[this.index].indexOf(0) == -1
        },
        twoFinished: function () {
            return this.remainList[this.index].indexOf(1) == -1
        },
        threeFinished: function () {
            return this.remainList[this.index].indexOf(2) == -1
        },
        fourFinished: function () {
            return this.remainList[this.index].indexOf(3) == -1
        }
    },
    methods: {
        onDoneClicked: function (participantIndex, stepIndex) {
            this.$emit('doneClick', participantIndex, stepIndex)
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

td.stepNumber {
    font-size: 1.6em;
    text-align: center;
    background: #ecf0f1;
    color: #2c3e50;
    width: 3em;
}

tr.currentStep {
    border: 4px solid red;
    background: white;
}

tr.disabledStep {
    opacity: 0.8;
}

h3 {
    margin: 0;
    width: 100%;
    text-align: center;
}

div.done {
    position: absolute;
    opacity: 0;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-weight: bold;
    display: flex;
    align-items: center;
}

div.done:hover {
    opacity: 1;
    cursor: pointer;
}

td {
    font-size: 1.2em;
    padding: 10px;
    position: relative;
}

.firstPerson>.done {
    border: 4px solid #2ecc71;
    /*color: #2ecc71;*/
    color: white;
}

.secondPerson>.done {
    border: 4px solid #3498db;
    /*color: #3498db;*/
    color: white;
}

.thirdPerson>.done {
    border: 4px solid #f1c40f;
    /*color: #f1c40f;*/
    color: white;
}

.fourthPerson>.done {
    border: 4px solid #e74c3c;
    /*color: #e74c3c;*/
    color: white;
}

.firstPerson {
    background: rgb(204, 237, 214);
}

.secondPerson {
    background: rgba(203, 224, 239);
}

.thirdPerson {
    background: rgba(252, 230, 194);
}

.fourthPerson {
    background: rgba(237, 205, 203);
}

.undoneStep {
    /*font-weight: bold;*/
    text-decoration: none;
    color: black;
}

.doneStep {
    text-decoration: line-through;
    color: gray;
}
</style>
