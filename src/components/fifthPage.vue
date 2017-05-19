<template>
<ol>
    <distTable v-for="participant in participants" :name="participant.name"></distTable>
</ol>
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
        currentMenu: state => state.currentMenu
    })
}
</script>

<style scoped>

</style>
