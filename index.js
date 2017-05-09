var page_cursor = 1;

$(document).ready(function() {
	refreshContents();

	$('#cooky_back').on("click",function(){
	  page_cursor--;
	  refreshContents();
	})
	$('#cooky_next').on("click",function(){
	  page_cursor++;
	  refreshContents();
	})
});

function refreshContents() {
	hideAll();
	showPage(page_cursor);
	displayBackNext();
}

function hideAll() {
	for (var index = 1; index <= 5; index++) {
		var id = '#app-' + index;
		$(id).hide();
	}
}

function showPage(index) {
	var id = '#app-' + index;
	$(id).show();
}

function displayBackNext() {
	// Back Button
	if (page_cursor == 1)
		$('#cooky_back').hide();
	else
		$('#cooky_back').show();
	
	// Next Button
	if (page_cursor == 5)
		$('#cooky_next').hide();
	else
		$('#cooky_next').show();
}

var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'First Page'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Second Page'
    }
})

let participant = {
    data: function () {
        return {
            name: ''
        }
    },
    template: `
    <div>
        <input v-model=name></input>
        <div class="dropdown">
            <button @click="onClick" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="true">
            Dropdown
            <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Beginner</a></li>
                <li><a href="#">Int.</a></li>
                <li><a href="#">Expert</a></li>
            </ul>
        </div>
        
    </div>`,
    methods: {
        onClick: function () {
            console.log('onclick')
            console.log(name)
            console.log(this.name)
            this.$emit('nameset', this.name)
        }
    }
}

let participants = {
    components: {
        'participant': participant
    },
    data: function () {
        return {
            name: ''
        }
    },
    template: `
    <div>
    <participant v-on:nameset="onNameSet"></participant>
    {{name}}
    </div>`
    ,
    methods: {
        onNameSet: function (n) {
            console.log(n)
            this.name = n
        }
    }
}


let app3 = new Vue({
    el: '#app-3',
    components: {
        'participants': participants
    },
    template: `
    <div>
    <participants></participants>
    </div>`       

})


var app4 = new Vue({
    el: '#app-4',
    data: {
        message: 'Fourth Page'
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Fifth Page'
    }
})

