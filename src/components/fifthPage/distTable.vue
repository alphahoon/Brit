<template>
<li>{{ name }}</li>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style scoped>
span {
    font-weight: bold;
}
</style>
