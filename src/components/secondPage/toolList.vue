<template>
<div class="col-sm-3 panel panel-warning">
    <div class="panel-heading">
        <span class="glyphicon glyphicon-cutlery" aria-hidden="true"> Cooking Tools</span>
    </div>
    <div class="panel-body">
        <tool v-for="item in tools" :name="item"></tool>
    </div>
</div>
</template>

<script>
export default {
    props: ['tools']
}
</script>

<style scoped>
span {
    margin-left: 10px;
}
</style>
