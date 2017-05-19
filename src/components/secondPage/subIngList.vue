<template>
<div class="col-sm-3 panel panel-info">
    <div class="panel-heading">
        <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"> Extra Ingredients</span>
    </div>
    <div class="panel-body">
        <subIng v-for="item in subings" :info="item" :amount="amount" :mode="mode"></subIng>
    </div>
</div>
</template>

<script>
import subIng from './subIng.vue'

export default {
    props: ['subings', 'amount', 'mode'],
    components: {
        subIng
    }
}
</script>

<style scoped>
span {
    margin-left: 10px;
}
</style>
