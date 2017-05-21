<template>
    <div class="row">
        <div class="col-md-4 col-sm-4">
            <menu-main v-bind:title="recipe.title" v-bind:amount="numPeople" v-bind:imageLink="recipe.imageLink"></menu-main>
            <div class="btn-group" role="group" aria-label="..." style="margin: 0 auto">
                <button type="button" id="r_button" class="btn btn-default" :class="unitMode === 'r' ? 'active': ''" v-on:click="r_mode"><img src="assets/hand.png" style="width:25px; border: none;"> Rough</button>
                <button type="button" class="btn btn-default"  :class="unitMode === 'r' ? '': 'active'" v-on:click="p_mode"><img src="assets/beaker.png" style="width:25px; border: none;"> Precise</button>
            </div>
        </div>
        <div class="col-md-8 col-sm-8">
            <tool-list v-bind:tools="recipe.tools"></tool-list>
            <main-ing-list v-bind:amount="numPeople" v-bind:main-ings="recipe.main" v-bind:mode="unitMode"></main-ing-list>
            <sub-ing-list v-bind:amount="numPeople" v-bind:sub-ings="recipe.sub" v-bind:mode="unitMode"></sub-ing-list>
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
    data: function () {
        return {
            unitMode: 'r'
        }
    },
    components: {
        menuMain,
        toolList,
        mainIngList,
        subIngList
    },
    methods: {
        p_mode: function() {
            this.unitMode = 'p';
            // document.getElementById('r_button').className="btn btn-default";
        },
        r_mode: function() {
            this.unitMode = 'r';
        }
    }
};
</script>

<style scoped>
div.ingList {
    height: 300px;
    margin-top: 20px;
    padding-left: 10%;
}
</style>
