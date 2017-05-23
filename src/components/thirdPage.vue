<template>
<div>
    <participants ref="participants"></participants>
</div>
</template>


<script>
import participants from './thirdPage/participants.vue'

export default {
    components: {
        participants
    },
    methods: {
      onNextClick: function (index) {
        this.$refs.participants.onNextClick(index)
      }
    }
}
</script>

<style scoped>

</style>
