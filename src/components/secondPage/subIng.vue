<template>
<div><input type="checkbox">{{ info.name }} <span>{{info.amount * amount}}{{ info.unit }}</span></div>
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
