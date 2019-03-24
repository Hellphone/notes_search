var records = {
	"Title search": "Title search title search title search", 
	"JavaScript is great!": "JavaScript is great! Really!", 
	"Google Analytics": "You might not need Google Analytics. Really.", 
	"Learn JavaScript": "It's cool, I must admit", 
	"Some text": "Some text some text some text some text some text",
	"Another text": "Another text another text another text another text"
}

function init() {
	var searchForm = document.getElementById('search-form');
	var searchQueryInput = document.getElementById('search-query');
	var resultBlock = document.querySelector('#result ul');

	searchQueryInput.onkeyup = addOnKeyUpHandler(searchQueryInput, resultBlock);
	searchForm.onsubmit = submitForm;
	searchQueryInput.focus();
	resultBlock.innerHTML = '';
}

function addOnKeyUpHandler(elem, resultBlock) {
	elem.addEventListener('keyup', function(e) {
		var query = elem.value;
		var arResult = getSearchResult(query);
		resultBlock.innerHTML = '';
		showResult(arResult, resultBlock);
	});
}

function getSearchResult(query) {
	if (query != '') {
		var arResult = {};

		for (var key in records) {
			if (key.toLowerCase().indexOf(query.toLowerCase()) >= 0
			|| records[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
				arResult[key] = records[key];
			}
		}

	} else {
		return {};
	}

	return arResult;
}

function showResult(source, target) {
	if (Object.keys(source).length === 0) {
		target.innerHTML = 'No match';
	} else {
		for (var key in source) {
			var newEl = document.createElement('li');
			var newUl = document.createElement('ul')
			var newEl2 = document.createElement('li');
			newEl.innerHTML = key;
			target.appendChild(newEl);
			newEl2.innerHTML = source[key];
			newEl.appendChild(newUl);
			newUl.appendChild(newEl2);
		}
	}
	
}

function submitForm(e, query) {
	e.preventDefault();

	console.log('Submitted!');
	var form = e.target;
	console.log(form);
	form.reset();
}

window.onload = init;