<template>
<div class="tableContainer">
    <h1>Result</h1>
    <span class="totalTime">Total Time : {{totalTime}} min</span>
    <distTable :participants="participants" :distList="distList" :workList="workList"></distTable>
    <div class="row">
        <button class="btn btn-danger btn-lg" @click="goBackToHome">Back to Home</button>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import distTable from './fifthPage/distTable.vue'

export default {
    components: {
        distTable
    },
    computed: mapState({
        participants: state => state.participants,
        currentMenu: state => state.currentMenu,
        workList: state => state.currentMenu.steps,
        distList: state => state.distribution,
        totalTime: state => state.totalTime
    }),
    methods: {
        goBackToHome: function () {
            this.$store.commit('setPageCursor', {
                pageCursor:1
            });
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 0;
}

.row {
    margin-top: 2em;
    text-align: center;
}

.totalTime {
    float: right;
    padding-right: 20px;
    font-weight: bold;
    font-size: 1.2em;
}
</style>
