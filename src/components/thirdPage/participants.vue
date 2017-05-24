<template>
<div>
    <h1>Participant List</h1>
    <participant v-for="(person, idx) in participants" ref="participant" :person="person" :key="person.key" :idx="idx" @nameChange="onNameChange" @levelChange="onLevelChange" @remove="onRemove" @enterPressed="onEnterPressed"></participant>
    <div class="row">
        <div v-if="participants.length < 4" class="col-md-12 adjustParticipants">
            <button currentKeyid="addParticipant" class="btn btn-primary btn-lg addButton" @click="onAddParticipant"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
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
        onNextClick: function (index) {
            this.$refs.participant[index].onNextClick()
        },
        onEnterPressed: function (idx) {
            if (this.participants.length > idx + 1)
                this.$refs.participant[idx + 1].focusInput()
            else if (this.participants.length == idx + 1 && this.participants.length < 4)
                this.onAddParticipant()
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 25px;
}

div.adjustParticipants {
    margin-top: 20px;
    text-align: center;
}

.addButton {
    width: 100px;
}

button.fullParticipants {
    font-weight: bold;
}

span.glyphicon-arrow-right {
    margin-left: 10px;
}
</style>
