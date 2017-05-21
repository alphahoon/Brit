<template>
    <div v-if="mode === 'r'">
        <input type="checkbox" style="margin-right:10px" />{{ info.name }}
        <span style="color:#00BCD4">{{info.ramount * amount}}{{ info.runit }}</span>
    </div>
    <div v-else>
        <input type="checkbox" style="margin-right:10px" />{{ info.name }}
        <span style="color:#00BCD4">{{info.pamount * amount}}{{ info.punit }}</span>
    </div>
</template>

<script>
export default {
    props: ['info', 'amount', 'mode']
}
</script>

<style scoped>
input {
    margin-right: 10px;
}

span {
    color: #00BCD4;
}
</style>
