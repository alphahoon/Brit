let workStep = {
    props: ['work'],
    computed: {
        timeCal: function() {
            let hour = this.work.time / 60
            let min = this.work.time % 60
            let str = ((hour === 0) ? hour + ' hrs ' : '') + min + ' mins'
            return str
        },
        difficulty: function() {
            if (this.work.difficulty == 0) {
                return 'Easy'
            } else if (this.work.difficulty == 1) {
                return 'Medium'
            } else if (this.work.difficulty == 2) {
                return 'Hard'
            }
        }
    },
    template: `
    <div class="row">
        <div id="rowWork" class="col-md-11">
            <div id="workContent" class="col-sm-6">
                <div>
                    <div class="workText"> {{this.work.text}} </div>
                    <div class="workAttribute col-md-5"> {{difficulty}}
                        <div class="timeCal"><span class="glyphicon glyphicon-time"></span>{{timeCal}}</div>
                    </div>
                </div>
            </div>
            <form class="checkBoxGroup">
                <label class="checkbox-inline">
                    <input type="checkbox" value=0> </label>
                <label class="checkbox-inline">
                    <input type="checkbox" value=1> </label>
                <label class="checkbox-inline">
                    <input type="checkbox" value=2> </label>
                <label class="checkbox-inline">
                    <input type="checkbox" value=3> </label>
            </form>
        </div>
    </div>
    `
}

let workList = {
    props: ['workList'],
    components: {
        'work-step': workStep
    },
    template: `
    <div>
        <work-step v-for="work in workList" :work="work"></work-step>
    </div>
    `
}

let fourthPage = {
    computed: Vuex.mapState({
        participants: state => state.participants,
        currentMenu: state => state.currentMenu,
        workList: state => state.currentMenu.steps
    }),
    components: {
        'work-list': workList
    },
    template: `
    <div>
        <div id="distributeBlock">
            <h1> Distribute Your Work!</h1>
            <work-list :workList="workList"></work-list>
        </div>
        <div class="graphBlock">
        </div>
    </div>
    `
}
