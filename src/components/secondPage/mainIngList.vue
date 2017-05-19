<template>
<div class="col-sm-4 panel panel-success">
    <div class="panel-heading">
        <span class="glyphicon glyphicon-apple" aria-hidden="true"> Main Ingredients</span>
    </div>
    <div class="panel-body">
        <mainIng v-for="item in mainings" :info="item" :amount="amount" :mode="mode"></mainIng>
    </div>
</div>
</template>

<script>
import mainIng from './mainIng.vue'

export default {
    props: ['mainings', 'amount', 'mode'],
    components: {
        mainIng
    }
}
</script>

<style scoped>
span {
    margin-left: 10px;
}
</style>
