<template>
<div class="tableContainer">
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
    // distList = [ []  []  []  []  []]
    data: function () {
        return {
            distList: [
                [0, 1, 2],
                [1, 2, 3],
                [2, 3],
                [0, 1, 2]
            ]
        }
    },
    computed: mapState({
        participants: state => state.participants,
        currentMenu: state => state.currentMenu,
        workList: state => state.currentMenu.steps,
        // distList: state => state.distribution
    }),
    methods: {
        goBackToHome: function () {
            location.reload()
        }
    }
}
</script>

<style scoped>
.row {
    margin-top: 2em;
    text-align: center;
}
</style>
