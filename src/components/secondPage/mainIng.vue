<template>
    <div v-if="mode === 'r'"><span>{{ info.name }}</span>
        <span style="color:#8BC34A">{{info.ramount * amount}}{{ info.runit }}</span>
    </div>
    <div v-else><span>{{ info.name }}</span>
        <span style="color:#8BC34A">{{info.pamount * amount}}{{ info.punit }}</span>
    </div>
</template>

<script>
export default {
    props: ['info', 'amount', 'mode']
}
</script>

<style scoped>

</style>
