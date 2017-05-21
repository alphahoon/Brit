<template>
<table>
    <tr>
        <!--<th>Step Number</th>-->
        <th class="firstPerson" v-if="participants.length >= 1">{{participants[0].name}}</th>
        <th class="secondPerson" v-if="participants.length >= 2">{{participants[1].name}}</th>
        <th class="thirdPerson" v-if="participants.length >= 3">{{participants[2].name}}</th>
        <th class="fourthPerson" v-if="participants.length >= 4">{{participants[3].name}}</th>
    </tr>
    <distStep v-for="(dist, index) in distList" :participants="participants" :dist="dist" :workList="workList" :index="index" @doneClick="doneClicked"></distStep>
</table>
</template>

<script>
import distStep from './distStep.vue'

export default {
    props: ['participants', 'distList', 'workList'],
    components: {
        distStep
    },
    methods: {
        doneClicked: function (participantIndex, stepIndex) {
            console.log(participantIndex, stepIndex)

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

table {
    table-layout: fixed;
    width: 100%;
}

th {
    text-align: center;
    font-size: 1.6em;
    font-weight: normal;
    color: white;
    padding: 10px;
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
