<template>
<div class="btn-group">
    <a v-for="i in 5" class="btn progressbars" :class="pageCursor == i ? 'btn-primary' : 'btn-default'" :id="'step'+i">Step {{i}}</a>
</div>
</template>

<script>
export default {
    props: ['pageCursor'],
    methods: {
        onStepClick: function (i) {
            this.$emit('stepChange', i)
        }
    }
}
</script>

<style scoped>
.btn-primary.progressbars .badge,
.btn-primary.progressbars:focus,
.btn-primary.progressbars:active,
.btn-primary.progressbars.focus,
.btn-primary.progressbars.active,
.btn-primary.progressbars:hover{
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
    cursor: default;
}
.btn-default.progressbars .badge,
.btn-default.progressbars:focus,
.btn-default.progressbars:active,
.btn-default.progressbars.focus,
.btn-default.progressbars.active,
.btn-default.progressbars:hover{
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  cursor: default;
}
</style>
