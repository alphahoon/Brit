<template>
    <div class="panel panel-info">
      <div class="panel-heading">
            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" style="margin-left:10px; font-weight:bold; font-size:1.3em; text-align:left"> Extra Ingredients</span>
        </div>
      <div class="panel-body">
        <sub-ing v-for="item in subIngs" v-bind:info="item" v-bind:amount="amount" v-bind:mode="mode"></sub-ing>
      </div>
    </div>
</template>

<script>
import subIng from './subIng.vue'

export default {
    props: ['subIngs', 'amount', 'mode'],
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
