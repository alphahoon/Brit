<template>
<div class="row" ref="stepBox">
    <div class="panel" :class="[isChecked ? panelInfo : panelDanger]">
        <div class="panel-heading">
            <span> Step {{work.step + 1}}. Difficulty: {{difficulty}} <span class="glyphicon glyphicon-time"></span>{{timeCal}} </span>
        </div>
        <div class="panel-body">
            <div class="workText"> {{this.work.text}} </div>
            <div data-toggle="buttons" style="margin-top: 5px;">
                <div class="buttongroup">
                    <cb v-for="(participant, idx) in participants" :idx="idx" :key="participant.name" :participant="participant" :stepIdx="work.step"></cb>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import cb from './cb.vue'
export default {
    props: ['work'],
    components: {
        'cb': cb
    },
    data: function () {
        return {
            panelInfo: 'panel-info',
            panelDanger: 'panel-danger'
        }
    },
    computed: {
        isChecked: function () {
            var dist = this.$store.state.distribution
            var step = this.work.step
            if (dist[step].length > 0)
                return true
            else
                return false
        },
        participants: function () {
            return this.$store.state.participants
        },
        timeCal: function () {
            let hour = this.work.time / 60
            let min = this.work.time % 60
            let str = ((hour === 0) ? hour + ' hrs ' : '') + min + ' mins'
            return str
        },
        difficulty: function () {
            if (this.work.difficulty == 0) {
                return 'Easy'
            } else if (this.work.difficulty == 1) {
                return 'Medium'
            } else if (this.work.difficulty == 2) {
                return 'Hard'
            }
        }
    },
    methods: {
        onNextClick: function () {
            this.$emit('moveScroll', this.$refs.stepBox.offsetTop + 180)

        }
    }
}
</script>

<style scoped>
.panel {}

.workText {
    font-size: 1.4em;
}

.btn span.glyphicon {
    opacity: 0;
}

.btn.active span.glyphicon {
    opacity: 1;
}

.panel-heading {
    font-weight: bold;
}

.panel.panel-info.col-md-6 {
    padding: 0px;
}

.glyphicon-time {
    margin-right: 5px;
}

.buttongroup {
    float: right;
}
</style>
