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

var app3 = new Vue({
    el: '#app-3',
    data: {
        message: 'Third Page'
    }
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

