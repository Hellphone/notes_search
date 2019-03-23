function init() {
	var searchForm = document.getElementById('search-form');
	var searchQueryInput = document.getElementById('search-query');
	searchForm.onkeyup = getSearchResult;
	searchForm.onsubmit = submitForm;
	searchQueryInput.focus();
}

function getSearchResult() {
	var records = {
		"Title search": "Title search title search title search", 
		"JavaScript is great!": "JavaScript is great! Really!", 
		"Google Analytics": "You might not need Google Analytics. Really.", 
		"Learn JavaScript": "It's cool, I must admit", 
		"Some text": "Some text some text some text some text some text",
		"Another text": "Another text another text another text another text"
	}

	var query = document.getElementById('search-query').value;

	var resultBlock = document.querySelector('#result ul');
	resultBlock.innerHTML = '';

	if (query != '') {
		var arResult = {};

		for (var key in records) {
			if (key.toLowerCase().indexOf(query.toLowerCase()) >= 0
				|| records[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
				arResult[key] = records[key];
			}
		}

		for (var key in arResult) {
			var newEl = document.createElement('li');
			var newUl = document.createElement('ul')
			var newEl2 = document.createElement('li');
			newEl.innerHTML = key;
			resultBlock.appendChild(newEl);
			newEl2.innerHTML = arResult[key];
			newEl.appendChild(newUl);
			newUl.appendChild(newEl2);
		}

		if (arResult.length == 0) {
			resultBlock.innerHTML = 'No match';
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