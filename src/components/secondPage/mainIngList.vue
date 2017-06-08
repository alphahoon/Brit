<template>
<div class="panel panel-success">
    <div class="panel-heading">
        <span class="glyphicon glyphicon-apple" aria-hidden="true"></span><span class="header"> Main Ingredients</span>
        <div class="btn-group" role="group" aria-label="..." style="margin: 0 auto">
            <button type="button" id="r_button" class="btn btn-default" :class="unitMode === 'r' ? 'active': ''" v-on:click="r_mode"><img src="assets/hand.png" style="width:25px; border: none;"> Rough(cup)</button>
            <button type="button" class="btn btn-default" :class="unitMode === 'r' ? '': 'active'" v-on:click="p_mode"><img src="assets/beaker.png" style="width:25px; border: none;"> Precise(g)</button>
        </div>
    </div>
    <div class="panel-body">
        <main-ing v-for="item in mainIngs" v-bind:info="item" v-bind:amount="amount" v-bind:mode="unitMode"></main-ing>
    </div>
</div>
</template>

<script>
import mainIng from './mainIng.vue'

export default {
    props: ['mainIngs', 'amount'],
    components: {
        mainIng
    },
    data: function () {
        return {
            unitMode: 'r'
        }
    },
    methods: {
      p_mode: function () {
          this.unitMode = 'p';
      },
      r_mode: function () {
          this.unitMode = 'r';
      }
    }
}
</script>

<style scoped>
.header {
    margin-left: 10px;
    font-weight: bold;
    font-size: 1.3em;
    text-align: left;
}
.btn-group {
  margin-right: 20px;
    float: right;
}

.panel-body {
    font-size: 1.2em;
}

.btn-default {
    padding: 2px 7px 2px 7px;
}
</style>
