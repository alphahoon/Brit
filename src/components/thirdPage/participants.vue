<template>
<div>
    <participant v-for="(person, idx) in participants" ref="participant" :person="person" :key="person.key" :idx="idx" @nameChange="onNameChange" @levelChange="onLevelChange" @remove="onRemove"></participant>
    <div class="row">
        <div class="col-md-12 adjustParticipants">
            <button v-if="participants.length < 4" currentKeyid="addParticipant" class="btn btn-default btn-lg" @click="onAddParticipant"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
            <!--<button v-if="participants.length == 4" class="btn btn-default btn-lg btn-success fullParticipants" @click="onNextClick">Next<span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></button>-->
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import participant from './participant.vue'

export default {
    components: {
        participant
    },
    data: function () {
        return {
            currentKey: 1,
        }
    },
    computed: mapState({
        participants: state => state.participants
    }),
    methods: {
        onAddParticipant: function () {
            this.$store.commit('addParticipant', {
                name: '',
                level: 0,
                key: this.currentKey
            })
            this.currentKey += 1
            // this.$refs.participant[0].focus()
            //     this.$nextTick(() => {
            //     this.$refs.participant[this.participants.length-1].focus()
            //   })
        },
        onNameChange: function (name, idx) {
            this.$store.commit('changeName', {
                idx: idx,
                name: name
            })
        },
        onLevelChange: function (level, idx) {
            this.$store.commit('changeLevel', {
                idx: idx,
                level: level
            })
        },
        onRemove: function (idx) {
            this.$store.commit('removeParticipant', {
                idx: idx
            })
        },
        onNextClick: function () {
            let isEveryName = this.participants.reduce(function(prevValue, curValue, curIdx, array){
                return prevValue && (curValue.name !== '')
            }, true)
            if(isEveryName){
                this.$store.commit('incrementPageCursor')
            }
        }
    }
}
</script>

<style scoped>
div.adjustParticipants {
    margin-top: 20px;
    text-align: center;
}

button.fullParticipants {
    font-weight: bold;
}

span.glyphicon-arrow-right {
    margin-left: 10px;
}
</style>
