<template>
<div class="btn-group">
    <button v-for="i in 5" class="btn" :class="pageCursor == i ? 'btn-primary' : 'btn-default'" :id="'step'+i" @click="onStepClick(i)">Step {{i}}</button>
</div>
</template>

<script>
export default {
    props: ['pageCursor'],
    methods: {
        onStepClick: function (i) {
            this.$emit('stepChange', i)
        }
    }
}
</script>

<style scoped>

</style>
