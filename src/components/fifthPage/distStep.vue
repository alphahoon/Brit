<template>
<tr>
    <!--<td class="stepNumber">{{dist.step}}</td>-->
    <td class="firstPerson" v-if="participants.length >= 1">
        <div class="done" v-if="dist.indexOf(0) != -1" @click="onDoneClicked(0, index)">
            <h3>Done!</h3></div>
        <span v-if="dist.indexOf(0) != -1">{{workList[index].text}}</span>
    </td>
    <td class="secondPerson" v-if="participants.length >= 2">
        <div class="done" v-if="dist.indexOf(1) != -1" @click="onDoneClicked(1, index)">
            <h3>Done!</h3></div>
        <span v-if="dist.indexOf(1) != -1">{{workList[index].text}}</span>
    </td>
    <td class="thirdPerson" v-if="participants.length >= 3">
        <div class="done" v-if="dist.indexOf(2) != -1" @click="onDoneClicked(2, index)">
            <h3>Done!</h3></div>
        <span v-if="dist.indexOf(2) != -1">{{workList[index].text}}</span>
    </td>
    <td class="fourthPerson" v-if="participants.length >= 4">
        <div class="done" v-if="dist.indexOf(3) != -1" @click="onDoneClicked(3, index)">
            <h3>Done!</h3></div>
        <span v-if="dist.indexOf(3) != -1">{{workList[index].text}}</span>
    </td>
</tr>
</template>

<script>
export default {
    props: ['participants', 'workList', 'dist', 'index'],
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

div.done {
    position: absolute;
    opacity: 0;
    background: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-weight: bold;
    text-align: center;
}

div.done:hover {
    opacity: 1;
    cursor: pointer;
}

td {
    font-size: 1.2em;
    padding: 10px;
    position: relative;
    height: 4em;
}

.firstPerson>.done {
    border: 4px solid #2ecc71;
    color: #2ecc71;
}

.secondPerson>.done {
    border: 4px solid #3498db;
    color: #3498db;
}

.thirdPerson>.done {
    border: 4px solid #f1c40f;
    color: #f1c40f;
}

.fourthPerson>.done {
    border: 4px solid #e74c3c;
    color: #e74c3c;
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
</style>
