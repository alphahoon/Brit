// var page_cursor = 1;

// $(document).ready(function() {
// 	refreshContents();

// 	$('#cooky_back').on("click",function(){
// 	  page_cursor--;
// 	  refreshContents();
// 	})
// 	$('#cooky_next').on("click",function(){
// 	  page_cursor++;
// 	  refreshContents();
// 	})
// });

// function refreshContents() {
// 	hideAll();
// 	showPage(page_cursor);
// 	displayBackNext();
// }

// function hideAll() {
// 	for (var index = 1; index <= 5; index++) {
// 		var id = '#app-' + index;
// 		$(id).hide();
// 	}
// }

// function showPage(index) {
// 	var id = '#app-' + index;
// 	$(id).show();
// }

// function displayBackNext() {
// 	// Back Button
// 	if (page_cursor == 1)
// 		$('#cooky_back').hide();
// 	else
// 		$('#cooky_back').show();
	
// 	// Next Button
// 	if (page_cursor == 5)
// 		$('#cooky_next').hide();
// 	else
// 		$('#cooky_next').show();
// }
let foodCard = {
    props: ['imgURL', 'foodName'],
    template: `
    <div class="col-md-4">
        <div class="thumbnail">
            <img v-bind:src="imgURL" v-bind:alt="foodName">
            <div class="caption">
                <h5>Thumbnail Label</h5>
            </div>
        </div>
    </div>`
}

let foodList = {
    props: ['foodList'],
    components: {
        'food-card': foodCard
    },
    template: `
    <div class="row">
        <food-card v-for="food in foodList" :imgURL="food.imgURL" :foodName="food.foodName" :key="food.foodName"></food-card>
    </div>`
}

let firstPage = {
    data: function () {
        return {
            foodList: [{imgURL: '', foodName: 'BS'}, {imgURL: '', foodName: 'BS'}, {imgURL: '', foodName: 'BS'}, {imgURL: '', foodName: 'BS'}, {imgURL: '', foodName: 'BS'}]
        }    
    },
    components: {
        'food-list': foodList
    },
    template: `
    <div>
        <food-list :foodList="foodList"></food-list>
    </div>
    `
}

let secondPage = {
    data: function () {
        return {
            message: "Hello World!! 2"
        }
    },
    template: `
    <div>
        {{ message }}
    </div>`
}

let participant = {
    props:['person', 'idx'],
    data: function () {
        return {
            name: ''
        }
    },
    template: `
    <div class="row participant">
        <span class="col-md-12">
            {{idx + 1}}
            <span class="glyphicon glyphicon-user"></span>
            <input @input="onNameChange($event.target.value)" v-bind:value="person.name" v-bind:placeholder="person.key == 0 ? 'Me' : ''"></input>
            <div class="btn-group" role="group">
                <button class="btn " v-bind:class="person.level == 0 ? 'btn-primary ' : 'btn-default'" @click="onLevelChange(0)">Beginner</button>
                <button class="btn " v-bind:class="person.level == 1 ? 'btn-primary ' : 'btn-default'" @click="onLevelChange(1)">Intermediate</button>
                <button class="btn " v-bind:class="person.level == 2 ? 'btn-primary ' : 'btn-default'" @click="onLevelChange(2)">Expert</button>
            </div>
            <button v-if="person.key != 0" class="btn btn-danger" @click="onRemove"><span class="glyphicon glyphicon-remove"></span></button> 
        </span>
    </div>`,
    methods: {
        onNameChange: function (name) {
            this.$emit('nameChange', name, this.person)
        },
        onLevelChange: function (level) {
            this.$emit('levelChange', level, this.person)
        },
        onRemove: function () {
            this.$emit('remove', this.person)
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
            participants: [{name: '', level: 0, key: 0}]
        }
    },
    template: `
    <div>
        <participant v-for="(person, idx) in participants" :person="person" :key="person.key" :idx="idx" @nameChange="onNameChange" @levelChange="onLevelChange" @remove="onRemove"></participant>
        <div class="row">
            <div class="col-md-12">
                <button id="addParticipant" class="btn btn-default" @click="onAddParticipant"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
            </div>
        </div>
    </div>`

    ,
    methods: {
        onNameSet: function (n) {
            console.log(n)
            this.name = n
        },
        onAddParticipant: function () {
            this.participants.push({ name: '', level: 0, key: this.currentKey })
            this.currentKey += 1
        },
        onNameChange: function (name, person) {
            person.name = name
        },
        onLevelChange: function (level, person) {
            person.level = level
        },
        onRemove: function (person) {
            let idx = this.participants.indexOf(person)
            this.participants.splice(idx, 1)
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
    </div>`       

}


let fourthPage = {
    data: function () {
        return {
            message: "Hello World!! 4"
        }
    },
    template: `
    <div>
        {{ message }}
    </div>`
}

let fifthPage = {
    data: function () {
        return {
            message: "Hello World!! 5"
        }
    },
    template: `
    <div>
        {{ message }}
    </div>`
}

let progressBar = {
    props: ['pageCursor'],
    template: `
    <div class="btn-group">
        <button v-for="i in 5" class="btn" :class="pageCursor == i ? 'btn-primary' : 'btn-default'" :id="'step'+i" @click="onStepClick(i)">Step {{i}}</button>
    </div>
    `,
    methods: {
        onStepClick: function (i) {
            this.$emit('stepChange', i)
        }
    }
}

let app = new Vue({
    el: '#app',
    data: function () {
        return {
            pageCursor: 1
        }
    },
    components: {
        'first-page': firstPage,
        'second-page': secondPage,
        'third-page': thirdPage,
        'fourth-page': fourthPage,
        'fifth-page': fifthPage,
        'progress-bar': progressBar
    },
    methods: {
        onPrevClick: function () {
            if (this.pageCursor > 1) {
                this.pageCursor -= 1
            }
        },
        onNextClick: function () {
            if (this.pageCursor < 5) {
                this.pageCursor += 1
            }
        },
        onStepChange: function (i) {
            if (i > 0 && i < 6) {
                this.pageCursor = i
            }
        }
    },
    template: `
    <div>
        <header>
            <nav>
                <a id="cooky_logo" href="#">Cooky</a>
            </nav>
            <div id="progress_bar">
                <a id="cooky_back" v-bind:class="pageCursor > 1? '': 'sarajo'" @click="onPrevClick"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a>
                <span id="progress-buttons"><progress-bar :pageCursor="pageCursor" @stepChange="onStepChange"></progress-bar></span>
                <a id="cooky_next" v-bind:class="pageCursor < 5? '': 'sarajo'" @click="onNextClick"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>
            </div>
        </header>
    <!-- Section -->
        <section>

            <div class="container">

                <first-page v-if="pageCursor == 1"></first-page>
                <second-page v-else-if="pageCursor == 2"></second-page>
                <third-page v-else-if="pageCursor == 3"></third-page>
                <fourth-page v-else-if="pageCursor == 4"></fourth-page>
                <fifth-page v-else-if="pageCursor == 5"></fifth-page>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <p>Team Brit - KAIST CS374, Spring 2017</p>
        </footer>
    </div>`
})



