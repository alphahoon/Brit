<template>
<div class="row">
        <div class="panel panel-info col-md-6">
            <div class="panel-heading">
                <span> {{difficulty}} <span class="glyphicon glyphicon-time"></span>{{timeCal}} </span>
            </div>
            <div class="panel-body">
                <div> {{this.work.text}} </div>

                <div data-toggle="buttons" style="margin-top: 5px;">
                    <!--<label class="btn btn-success" style="margin: 4px;">
                        <input type="checkbox" autocomplete="off" checked>
                        <span class="glyphicon glyphicon-ok"></span>
                    </label>
                    <label class="btn btn-primary"  style="margin: 4px;">
                        <input type="checkbox" autocomplete="off">
                        <span class="glyphicon glyphicon-ok"></span>
                    </label>

                    <label class="btn btn-warning" style="margin: 4px;">
                        <input type="checkbox" autocomplete="off">
                        <span class="glyphicon glyphicon-ok"></span>
                    </label>			-->
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
    computed: {
        participants: function(){
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
    }
}
</script>

<style scoped>
.btn span.glyphicon {
	opacity: 0;
}
.btn.active span.glyphicon {
	opacity: 1;
}
.panel.panel-info.col-md-6{
    padding: 0px;
}

.buttongroup{
    float:right;
}
</style>
