<template>
<div class="row participant">
    <div class="col-md-12">
        <form class="form-inline">
            <span class="participantIndex">{{idx + 1}} </span>
            <span class="glyphicon glyphicon-user" :class="getColor"> </span>
            <input ref="nameInput" @clicked="onNextClick" @keyup.enter="onEnterPressed" @input="onNameChange($event.target.value)" :value="person.name" :placeholder="person.key == 0 ? 'My name' : 'Put your collaborator\'s name'"></input>
            <div class="btn-group " role="group">
                <button class="btn btn-lg btn-default" :class="person.level == 0 ? 'active ' : ''" @click.prevent="onLevelChange(0)">Beginner</button>
                <button class="btn btn-lg btn-default" :class="person.level == 1 ? 'active' : ''" @click.prevent="onLevelChange(1)">Intermediate</button>
                <button class="btn btn-lg btn-default" :class="person.level == 2 ? 'active' : ''" @click.prevent="onLevelChange(2)">Expert</button>
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
    mounted: function () {
        this.$refs.nameInput.focus()
    },
    computed: {
        getColor: function () {
            if (this.idx == 0) {
                return 'p-success'
            } else if (this.idx == 1) {
                return 'p-primary'
            } else if (this.idx == 2) {
                return 'p-warning'
            } else if (this.idx == 3) {
                return 'p-danger'
            }
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
        },
        onNextClick: function () {
            if (name === '') {
                this.$refs.nameInput.focus()
                this.$refs.nameInput.className = "nameInput empty-name"
            }
        },
        onEnterPressed: function () {
            this.$emit('enterPressed')
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

.empty-name::-webkit-input-placeholder {
    color: rgb(234, 90, 74);
}

.empty-name::-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: rgb(234, 90, 74);
    opacity: 1;
}

.empty-name::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: rgb(234, 90, 74);
    opacity: 1;
}

.empty-name:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgb(234, 90, 74);
}

button.btn.btn-lg.btn-default:active,
button.btn.btn-lg.btn-default.active {
    background: #3498db;
    color: white;
    border-color: #7f8c8d;
}

.p-success {
    color: #2ecc71;
}

.p-warning {
    color: #f1c40f;
}

.p-danger {
    color: #e74c3c;
}

.p-primary {
    color: #3498db;
}
</style>
