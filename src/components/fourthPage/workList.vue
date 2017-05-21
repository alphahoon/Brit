<template>
<div class="col-md-6">
    <workStep v-for="work in workList" :work="work"></workStep>
</div>
</template>

<script>
import workStep from './workStep.vue'

export default {
    props: ['workList'],
    components: {
        workStep
    }
}
</script>

<style scoped>

</style>
