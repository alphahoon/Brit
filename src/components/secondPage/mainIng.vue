<template>
<div><span>{{ info.name }}</span> <span>{{info.amount * amount}}{{ info.unit }}</span></div>
</template>

<script>
export default {
    props: ['info', 'amount', 'mode']
}
</script>

<style scoped>
span {
    color: #8BC34A;
}
</style>
