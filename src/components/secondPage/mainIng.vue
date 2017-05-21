<template>
<div v-if="mode === 'r'">
    <img src="../../../assets/mainingdot.png" alt=""><span>{{ info.name }}</span>
    <span style="color:#8BC34A"> {{info.ramount * amount}} {{ info.runit }}</span>
</div>
<div v-else>
    <img src="../../../assets/mainingdot.png" alt=""><span>{{ info.name }}</span>
    <span style="color:#8BC34A"> {{info.pamount * amount}} {{ info.punit }}</span>
</div>
</template>

<script>
export default {
    props: ['info', 'amount', 'mode']
}
</script>

<style scoped>
div {
    margin-top: 3px;
    margin-bottom: 3px;
}

img {
    width: 6px;
    height: 6px;
    border: None;
    margin-right: 4px;
}
</style>
