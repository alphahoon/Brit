<template>
<div class="tableContainer">
    <distTable :participants="participants" :distList="distList"></distTable>
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
    data: function () {
        return {
            distList: [{
                step: 0,
                participants: [0, 1, 2]
            }, {
                step: 1,
                participants: [1, 3]
            }, {
                step: 2,
                participants: [0, 2]
            }]
        }
    },
    computed: mapState({
        participants: state => state.participants,
        currentMenu: state => state.currentMenu
    })
}
</script>

<style scoped>

</style>
