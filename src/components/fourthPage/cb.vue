<template>
<div class="labelClass">
    <div class="participantName">{{participant.name}}</div>
    <div class="checkboxContainer">
        <label class="btn" :class="bgColor" style="margin: 4px; padding:3px;" v-on:click="checkWork">
            <span v-if="isChecked" class="glyphicon glyphicon-ok"></span>
        </label>
    </div>
</div>
</template>

<script>
export default {
    props: ['participant', 'idx', 'stepIdx'],
    computed: {
        bgColor: function () {
            if (this.idx == 0) {
                return 'btn-success'
            } else if (this.idx == 1) {
                return 'btn-primary'
            } else if (this.idx == 2) {
                return 'btn-warning'
            } else if (this.idx == 3) {
                return 'btn-danger'
            }
        }
    },
    data: function () {
        return {
            isChecked: false
        }
    },
    methods: {
        checkWork: function () {
            this.isChecked = !this.isChecked;
            if (this.isChecked) {
                this.$store.commit('pushDistribution', {
                    step: this.stepIdx,
                    participant: this.idx
                });
            } else {
                this.$store.commit('removeDistribution', {
                    step: this.stepIdx,
                    participant: this.idx
                });
            }
            //console.log(this.$store.state.participant)
            //console.log(this.$store.state.distribution)
        }
    }
}
</script>


<style scoped>
.btn-danger {
    width: 30px;
    height: 30px;
}

.btn-success {
    width: 30px;
    height: 30px;
}

.btn-primary {
    width: 30px;
    height: 30px;
}

.btn-warning {
    width: 30px;
    height: 30px;
}

.checkboxContainer {
    text-align: center;
}

.labelClass {
    display: inline-block;
    padding: 0 1em;
    align-content: center;
}

.participantName {
    text-align: center;
}

.glyphicon {
    vertical-align: text-top;
}
</style>
