<template>
<tr>
    <!--<td class="stepNumber">{{dist.step}}</td>-->
    <td class="firstPerson" v-if="participants.length >= 1">1</td>
    <td class="secondPerson" v-if="participants.length >= 2">2</td>
    <td class="thirdPerson" v-if="participants.length >= 3">3</td>
    <td class="fourthPerson" v-if="participants.length >= 4">4</td>
</tr>
</template>

<script>
export default {
    props: ['participants', 'dist']
}
</script>

<style scoped>
table,
tr,
th,
td {
    border: 1px solid white;
}

td {
    font-size: 1.2em;
    padding: 10px;
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
