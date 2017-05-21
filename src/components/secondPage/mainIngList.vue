<template>
    <div class="panel panel-success">
      <div class="panel-heading">
            <span class="glyphicon glyphicon-apple" aria-hidden="true"></span><span class="header"> Main Ingredients</span>
        </div>
      <div class="panel-body">
        <main-ing v-for="item in mainIngs" v-bind:info="item" v-bind:amount="amount" v-bind:mode="mode"></main-ing>
      </div>
    </div>
</template>

<script>
import mainIng from './mainIng.vue'

export default {
    props: ['mainIngs', 'amount', 'mode'],
    components: {
        mainIng
    }
}
</script>

<style scoped>
.header {
    margin-left: 10px;
    font-weight:bold; 
    font-size:1.3em; 
    text-align:left
}
</style>
