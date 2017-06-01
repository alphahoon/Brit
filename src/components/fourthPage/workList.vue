<template>
<div class="col-md-6">
    <h1> Distribute Your Work!</h1>
    <div class="row">
        <span class="guide">※ Multi-selection is possible!</span>
    </div>
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
h1 {
    text-align: center;
}

.guide {
    font-weight: bold;
    font-size: 2rem;
    float: right;
    color: #e74c3c;
    margin-bottom: 10px;
    margin-right: 20px;
}
</style>
