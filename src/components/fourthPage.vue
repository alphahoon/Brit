<template>
<div id="distributeBlock">
    <h1> Distribute Your Work!</h1>
    <div class="row">
        <workList ref="workList" :workList="workList" @moveScroll="moveScroll"></workList>
        <chart :participants="participants" :distList="distList" :workList="workList"></chart>
    </div>
</div>
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
    },
    methods: {
      onNextClick: function(index) {
        this.$refs.workList.onNextClick(index)
      },
      moveScroll: function(top) {
        this.$emit('moveScroll', top)
      }
    }
}
</script>

<style scoped>

</style>
