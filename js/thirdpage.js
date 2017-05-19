let participant = {
    props: ['person', 'idx'],
    data: function () {
        return {
            name: ''
        }
    },
    template: `
    <div class="row participant">
        <div class="col-md-12">
            <form class="form-inline">
                <span style="font-size:1.5em;">{{idx + 1}} </span>
                <span class="glyphicon glyphicon-user" style="font-size:1.5em;"> </span>
                <input style="width: 40%; margin-left:10px; margin-right:10px;padding-left:10px;padding-right:10px" @input="onNameChange($event.target.value)" v-bind:value="person.name" v-bind:placeholder="person.key == 0 ? 'Me' : ''"></input>
                <div class="btn-group " role="group">
                    <button class="btn btn-lg" v-bind:class="person.level == 0 ? 'btn-success ' : 'btn-default'" @click.prevent="onLevelChange(0)">Beginner</button>
                    <button class="btn btn-lg" v-bind:class="person.level == 1 ? 'btn-warning ' : 'btn-default'" @click.prevent="onLevelChange(1)">Intermediate</button>
                    <button class="btn btn-lg" v-bind:class="person.level == 2 ? 'btn-danger ' : 'btn-default'" @click.prevent="onLevelChange(2)">Expert</button>
                </div>
                <button v-if="person.key != 0" class="btn btn-danger" @click="onRemove">
                    <span class="glyphicon glyphicon-remove"></span>
                </button>
            </form>
        </div>
    </div>
    `,
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
let participants = {
    components: {
        'participant': participant
    },
    data: function () {
        return {
            currentKey: 1,
        }
    },
    computed: Vuex.mapState({
        participants: state => state.participants
    }),
    template: `
    <div>
        <participant v-for="(person, idx) in participants" :person="person" :key="person.key" :idx="idx" @nameChange="onNameChange" @levelChange="onLevelChange" @remove="onRemove"></participant>
        <div class="row">
            <div class="col-md-12" style="margin-top: 20px;text-align: center;">
                <button v-if="participants.length < 4" currentKeyid="addParticipant" class="btn btn-default btn-lg" @click="onAddParticipant"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                <button v-if="participants.length == 4" class="btn btn-default btn-lg btn-success" style="font-weight:bold;" @click="onNextClick">Next<span class="glyphicon glyphicon-arrow-right" aria-hidden="true" style="margin-left:10px"></span></button>
            </div>
        </div>
    </div>
    `,
    methods: {
        onAddParticipant: function () {
            // this.participants.push({
            //     name: '',
            //     level: 0,
            //     key: this.currentKey
            // })
            store.commit('addParticipant', {
                name: '',
                level: 0,
                key: this.currentKey
            })
            this.currentKey += 1
        },
        onNameChange: function (name, idx) {
            // this.participants[idx].name = name
            store.commit('changeName', { idx: idx, name: name })
        },
        onLevelChange: function (level, idx) {
            // this.participants[idx].level = level
            store.commit('changeLevel', { idx: idx, level: level })
        },
        onRemove: function (idx) {
            // let idx = this.participants.indexOf(person)
            // this.participants.splice(idx, 1)
            store.commit('removeParticipant', { idx: idx })
        },
        onNextClick: function () {
            store.commit('incrementPageCursor')
        }
    }
}

let thirdPage = {
    components: {
        'participants': participants
    },
    template: `
    <div>
        <participants></participants>
    </div>
    `
}