<template>
<div>
    <menuMain :title="recipe.title" :amount="numPeople" :imageLink="recipe.imageLink"></menuMain>
    <div class="btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default" @click="pMode">Precisely</button>
        <button type="button" class="btn btn-default" @click="rMode">Roughly</button>
    </div>
    <div class="row ingList">
        <toolList :tools="recipe.tools"></toolList>
        <mainIngList :amount="numPeople" :mainings="recipe.main" :mode="unitMode"></mainIngList>
        <subIngList :amount="numPeople" :subings="recipe.sub" :mode="unitMode"></subIngList>
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
            unitMode: 'p'
        }
    },
    components: {
        menuMain,
        toolList,
        mainIngList,
        subIngList
    },
    methods: {
        pMode: function () {
            this.unitMode = 'p';
        },
        rMode: function () {
            this.unitMode = 'r'
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
