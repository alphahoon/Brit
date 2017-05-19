<template>
<div class="menuMain">
    <div class="row">
        <h3>{{title}}</h3>
    </div>
    <div class="row imageLink">
        <img :src="imageLink" width="300" height="200">
    </div>
    <div class="row">
        <span class="servingAmountTitle"> Serving Amount : </span>
        <button @click="reduceAmount" class="btn btn-xs btn-danger glyphicon glyphicon-minus servingAdjust" aria-hidden="true"></button>
        <span class="servingAmountContents"> {{amount}} </span>
        <button @click="addAmount" class="btn btn-xs btn-danger glyphicon glyphicon-plus servingAdjust" aria-hidden="true"></button>
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
