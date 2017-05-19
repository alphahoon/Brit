<template>
<div>
    <div id="distributeBlock">
        <h1> Distribute Your Work!</h1>
        <workList :workList="workList"></workList>
    </div>
    <div class="graphBlock">
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import workList from './fourthPage/workList.vue'

export default {
    computed: mapState({
        participants: state => state.participants,
        currentMenu: state => state.currentMenu,
        workList: state => state.currentMenu.steps
    }),
    components: {
        workList
    }
}
</script>

<style scoped>

</style>
