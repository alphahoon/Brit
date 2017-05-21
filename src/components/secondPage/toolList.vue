<template>
    <div class="panel panel-warning">
        <div class="panel-heading">
            <span class="glyphicon glyphicon-cutlery" aria-hidden="true" style="margin-left:10px; font-weight:bold; font-size:1.3em; text-align:left"> Cooking Tools</span>
        </div>
        <div class="panel-body">
            <tool v-for="info in tools" :info="info"></tool>
        </div>
    </div>
</template>

<script>
import tool from './tool.vue'

export default {
    props: ['tools'],
    components:{
        tool
    }
}
</script>

<style scoped>
span {
    margin-left: 10px;
}
</style>
