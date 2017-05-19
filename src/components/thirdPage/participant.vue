<template>
<div class="row participant">
    <div class="col-md-12">
        <form class="form-inline">
            <span class="participantIndex">{{idx + 1}} </span>
            <span class="glyphicon glyphicon-user"> </span>
            <input @input="onNameChange($event.target.value)" :value="person.name" :placeholder="person.key == 0 ? 'Me' : ''"></input>
            <div class="btn-group " role="group">
                <button class="btn btn-lg" :class="person.level == 0 ? 'btn-success ' : 'btn-default'" @click.prevent="onLevelChange(0)">Beginner</button>
                <button class="btn btn-lg" :class="person.level == 1 ? 'btn-warning ' : 'btn-default'" @click.prevent="onLevelChange(1)">Intermediate</button>
                <button class="btn btn-lg" :class="person.level == 2 ? 'btn-danger ' : 'btn-default'" @click.prevent="onLevelChange(2)">Expert</button>
            </div>
            <button v-if="person.key != 0" class="btn btn-danger" @click="onRemove">
                    <span class="glyphicon glyphicon-remove"></span>
                </button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    props: ['person', 'idx'],
    data: function () {
        return {
            name: ''
        }
    },
    methods: {
        onNameChange: function (name) {
            this.$emit('nameChange', name, this.idx)
        },
        onLevelChange: function (level) {
            this.$emit('levelChange', level, this.idx)
        },
        onRemove: function () {
            this.$emit('remove', this.idx)
        }
    }
}
</script>

<style scoped>
span.participantIndex {
    font-size: 1.5em;
}

span.glyphicon-user {
    font-size: 1.5em;
}

input {
    width: 40%;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>
