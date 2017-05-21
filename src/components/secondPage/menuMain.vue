<template>
    <div style="text-align:left; padding-left:20px">
        <div class="row" style="width: 90%; padding-right: 10px;">
            <h3>{{title}}</h3>
        </div>
        <div class="row" style="margin-bottom: 10px;">
            <img v-bind:src=imageLink style="width: 90%">
        </div>
        <div class="row">
            <span style="font-size:1.2em; font-weight:bold"> Serving Amount : </span>
            <button v-on:click="reduceAmount" class="btn btn-xs btn-danger glyphicon glyphicon-minus servingAdjust" aria-hidden="true" />
            <span style="font-weight:bold;font-size:1.2em"> {{amount}} </span>
            <button v-on:click="addAmount" class="btn btn-xs btn-danger glyphicon glyphicon-plus servingAdjust" aria-hidden="true" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'imageLink', 'amount'],
    methods: {
        addAmount: function () {
            this.$store.commit('addAmount')
        },
        reduceAmount: function () {
            this.$store.commit('reduceAmount')
        }
    }
}
</script>

<style scoped>
div.menuMain {
    text-align: center;
}

div.imageLink {
    margin-bottom: 10px;
}

span.servingAmountTitle {
    font-size: 1.5em;
    font-weight: bold;
}

span.servingAmountContents {
    font-weight: bold;
    font-size: 1.5em;
}
</style>
