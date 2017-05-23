<template>
<div class="col-md-6">
    <workStep ref="workStep" v-for="work in workList" :work="work" @moveScroll="moveScroll"></workStep>
</div>
</template>

<script>
import workStep from './workStep.vue'

export default {
    props: ['workList'],
    components: {
        workStep
    },
    methods: {
      onNextClick: function(index) {
        this.$refs.workStep[index].onNextClick()
      },
      moveScroll: function(top) {
        this.$emit('moveScroll', top)
      }
  }
}
</script>

<style scoped>

</style>
