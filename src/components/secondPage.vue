<template>
<div class="row">
    <h1>Adjust Serving Amounts &amp; Select Extra Ingredients!</h1>
    <div class="col-md-4 col-sm-4" id="mainBox">
        <menu-main v-bind:title="recipe.title" v-bind:amount="numPeople" v-bind:imageLink="recipe.imageLink" :level="recipe.level" :time='recipe.time'></menu-main>
    </div>
    <div class="col-md-8 col-sm-8">
        <div class="amountSel">
            <span class="servingAmountTitle"> Serving Amount : For </span>
            <button v-on:click="reduceAmount" class="btn btn-sm btn-danger glyphicon glyphicon-minus servingAdjust" aria-hidden="true" />
            <span class="servingAmountContents"> {{numPeople}} </span>
            <button v-on:click="addAmount" class="btn btn-sm btn-danger glyphicon glyphicon-plus servingAdjust" aria-hidden="true" />
            <span class="servingAmountTitle"> People</span>
        </div>
        <tool-list v-bind:tools="recipe.tools"></tool-list>
        <main-ing-list v-bind:amount="numPeople" v-bind:main-ings="recipe.main"></main-ing-list>
        <sub-ing-list v-bind:amount="numPeople" v-bind:sub-ings="recipe.sub"></sub-ing-list>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import menuMain from './secondPage/menuMain.vue'
import toolList from './secondPage/toolList.vue'
import mainIngList from './secondPage/mainIngList.vue'
import subIngList from './secondPage/subIngList.vue'

export default {
    computed: mapState({
        recipe: state => state.currentMenu,
        numPeople: state => state.numPeople
    }),
    components: {
        menuMain,
        toolList,
        mainIngList,
        subIngList
    },
    methods: {
        addAmount: function () {
            this.$store.commit('addAmount')
        },
        reduceAmount: function () {
            this.$store.commit('reduceAmount')
        }
    }
};
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 25px;
}

div.ingList {
    height: 300px;
    margin-top: 20px;
    padding-left: 10%;
}

menu-main {
    text-align: center;
    align-content: center;
}

.amountSel {
    margin-bottom: 10px;
}

#mainBox {
    text-align: center;
    align-content: center;
}

span.servingAmountTitle {
    font-size: 1.5em;
    font-weight: bold;
}

span.servingAmountContents {
    font-weight: bold;
    font-size: 1.5em;
    width: 5px;
}

div.btn-group {
    float: center;
    margin-top: 30px;
}
</style>
