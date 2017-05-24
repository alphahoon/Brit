<template>
<div class="row participant">
    <div class="formContainer">
        <form class="form-inline">
            <span class="glyphicon glyphicon-user" :class="getColor"> </span>
            <input ref="nameInput" @clicked="onNextClick" @keyup.enter="onEnterPressed(idx)" @input="onNameChange($event.target.value)" :value="person.name" :placeholder="person.key == 0 ? 'My name' : 'Put your collaborator\'s name'"></input>
            <div class="btn-group " role="group">
                <button class="btn btn-lg btn-default" :class="person.level == 0 ? 'active ' : ''" @click.prevent="onLevelChange(0)">Beginner</button>
                <button class="btn btn-lg btn-default" :class="person.level == 1 ? 'active' : ''" @click.prevent="onLevelChange(1)">Intermediate</button>
                <button class="btn btn-lg btn-default" :class="person.level == 2 ? 'active' : ''" @click.prevent="onLevelChange(2)">Expert</button>
            </div>
            <button class="btn btn-danger" @click="onRemove">
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
        onEnterPressed: function (idx) {
            this.$emit('enterPressed', idx)
        },
        focusInput: function () {
            this.$refs.nameInput.focus()
        }
    }
}
</script>

<style scoped>
div.row.participant {
    font-size: 2.4em;
    padding: 0;
    margin-bottom: 20px;
    text-align: center;
}

span.participantIndex {
    font-size: 1.5em;
}

span.glyphicon-user {
    font-size: 2em;
}

input {
    width: 15em;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

.btn-danger {
    margin-left: 1em;
}

.formContainer {
    display: inline-block
}

.form-inline {
    display: flex;
    align-items: center;
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
    color: rgb(234, 90, 74);
    opacity: 1;
}

.empty-name:-ms-input-placeholder {
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
