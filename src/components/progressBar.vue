<template>
<div class="btn-group">
    <a v-for="i in 5" class="progressbars" :class="pageCursor == i ? 'btn btn-primary navbar-btn' : 'btn btn-default navbar-btn'" :id="'step'+i">Step {{i}}</a>
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
.btn-primary,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:hover,
.btn-primary.focus,
.btn-primary.active,
.btn-primary.focus:hover,
.btn-primary.active:hover,
.btn-primary.focus:focus,
.btn-primary.active:focus,
.btn-primary.focus:active,
.btn-primary.active:active {
    color: white;
    background-color: #3498db;
    border: 2px solid white;
    cursor: default;
    font-weight: bold;
}

.btn-default,
.btn-default:focus,
.btn-default:active,
.btn-default:hover,
.btn-default.focus,
.btn-default.active,
.btn-default.focus:hover,
.btn-default.active:hover,
.btn-default.focus:focus,
.btn-default.active:focus,
.btn-default.focus:active,
.btn-default.active:active {
    color: #34495e;
    background-color: white;
    border: 2px solid white;
    cursor: default;
    font-weight: bold;
}

.btn-primary.disabled {
    background-color: #3498db;
}

.btn-default.disabled {
    background-color: #fff;
}
</style>
