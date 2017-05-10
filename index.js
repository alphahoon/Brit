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

let firstPage = {
    data: function () {
        return {
            message: "Hello World!! 1"
        }
    },
    template: `
    <div>
        {{ message }}
    </div>`
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

let thirdPage = {
    data: function () {
        return {
            message: "Hello World!! 3"
        }
    },
    template: `
    <div>
        {{ message }}
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
        'fifth-page': fifthPage
    },
    methods: {
        onPrevClick: function () {
            if (this.pageCursor > 0) {
                this.pageCursor -= 1
            }
        },
        onNextClick: function () {
            if (this.pageCursor < 5) {
                this.pageCursor += 1
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
                <a id="cooky_back" v-if="pageCursor > 1" @click="onPrevClick"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a>
                <span>여기에 프로그레스 표시 들어가면 됨</span>
                <a id="cooky_next" v-if="pageCursor < 5" @click="onNextClick"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>
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


