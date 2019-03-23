function init() {
	var searchForm = document.getElementById('search-form');
	var searchQueryInput = document.getElementById('search-query');
	searchForm.onkeyup = getSearchResult;
	searchForm.onsubmit = submitForm;
	searchQueryInput.focus();
}

function getSearchResult() {
	var arHints = [
		"Title search", 
		"JavaScript is great!", 
		"Google Analytics", 
		"Learn JavaScript", 
		"Some text",
		"Another text"
	];

	var query = document.getElementById('search-query').value;

	var resultBlock = document.querySelector('#result ul');
	resultBlock.innerHTML = '';

	if (query != '') {
		var arResult = [];

		for (var i = 0; i < arHints.length; i++) {
			if (arHints[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
				arResult.push(arHints[i]);
			}
		}

		for (var i = 0; i < arResult.length; i++) {
			var newEl = document.createElement('li');
			newEl.innerHTML = arResult[i];
			resultBlock.appendChild(newEl);
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