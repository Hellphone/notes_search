function init() {
	var searchForm = document.getElementById('search-form');
	var searchQueryInput = document.getElementById('search-query');
	var resultBlock = document.querySelector('#result ul');

	var arRecords = getFileContents('records.json');

	searchQueryInput.onkeyup = addOnKeyUpHandler(searchQueryInput, resultBlock, arRecords);
	searchForm.onsubmit = submitForm;
	searchQueryInput.focus();
	resultBlock.innerHTML = '';
}

function getFileContents(filename) {
	var xhr = new XMLHttpRequest();
	var result;
	xhr.open('GET', filename, false);

	xhr.onload = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xhr.status == 200) {
            	result = JSON.parse(xhr.responseText);
           }
           else if (xhr.status == 400) {
            	console.error('There was an error 400');
           }
           else {
            	console.error('something else other than 200 was returned');
           }
        }
    };

	xhr.send();
	return result;
}

function addOnKeyUpHandler(elem, resultBlock) {
	elem.addEventListener('keyup', function(e) {
		var query = elem.value;
		var arResult = getSearchResult(query);
		resultBlock.innerHTML = '';
		if (arResult !== false) {
			showResult(arResult, resultBlock);
		}
	});
}

function getSearchResult(query) {
	var arResult = {};
	var records = getFileContents('records.json');

	if (query != '') {
		for (var key in records) {
			if (key.toLowerCase().indexOf(query.toLowerCase()) >= 0
				|| records[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
				arResult[key] = records[key];
			}
		}
	}
	else {
		return false;
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