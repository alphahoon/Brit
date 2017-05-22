<template>
<div id="distributeBlock">
    <h1> Distribute Your Work!</h1>
    <div class="row">
        <workList :workList="workList"></workList>
        <chart :participants="participants" :distList="distList" :workList="workList"></chart>
    </div></div>
</template>

<script>
import {
    mapState
} from 'vuex'
import workList from './fourthPage/workList.vue'
import chart from './fourthPage/chart.vue'

export default {
    computed: mapState({
        participants: state => state.participants,
        currentMenu: state => state.currentMenu,
        workList: state => state.currentMenu.steps,
        distList: state => state.distribution
    }),
    components: {
        workList,
        chart
    }
}
</script>

<style scoped>

</style>
