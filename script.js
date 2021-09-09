
async function getTrend() {
	url = "https://polar-temple-04652.herokuapp.com/tr"
    // show loader
	document.getElementById('loading').classList.remove('hidden');

	// Storing response
	const response = await fetch(url, {
		method: 'GET',
		headers: {
		'Content-Type': 'application/json'
		}
	})
	.then((response) => {
		if (response.ok) {
		  return response.json();
		} else {
			document.getElementById('loading').classList.add('hidden');
		  	throw new Error('Something went wrong');
		}
	})
	.then((responseJson) => {
		document.getElementById('loading').classList.add('hidden');
		trend(responseJson);
	})
	.catch((error) => {
		document.getElementById('loading').classList.add('hidden');
		document.getElementById("cards").innerHTML = "<h1> An error has occured, please try again. </h1>";
		console.log(error)
	});
}

// Function to define innerHTML for display [ RESULTS PAGE ]
function trend(data) {
	let results =
		`<div class="card-columns">`;
	for (let r of data) {
		results += `
		<div class="card border-dark" >
			<img class="card-img-top" style="object-fit: contain;" src='${r.img}' alt="Card image cap">
			<div class="card-body">
				<h5 class="card-title">${r.name}</h5>
				<a onclick="linkSender(event)" class="btn btn-outline-success my-2 my-sm-0" data-record-id="${r.url}">GET LINK </a>
			</form>
			</div>
		</div>
		`;}

	// Setting innerHTML as tab variable
	document.getElementById("cards").innerHTML = results;

}

// Get form input [INDEX ]
function valueSender(){
	let x = document.getElementById("userinput").value;
	const api_url = "https://polar-temple-04652.herokuapp.com/s/" + x;
	localStorage.setItem("myValue", api_url);
	window.location.href = "results.html";
	}

// Defining async function for search
async function getapi(url) {
    // show loader
	document.getElementById('loading').classList.remove('hidden');

	const response = await fetch(url, {
		method: 'GET',
		headers: {
		'Content-Type': 'application/json'
		}
	})
	.then((response) => {
		if (response.ok) {
		  return response.json();
		} else {
			document.getElementById('loading').classList.add('hidden');
		  	throw new Error('Something went wrong');
		}
	})
	.then((responseJson) => {
		// Do something with the response
		document.getElementById('loading').classList.add('hidden');
		show(responseJson)
	})
	.catch((error) => {
		document.getElementById('loading').classList.add('hidden');
		document.getElementById("cards").innerHTML = "<h1> An error has occured, please try again. </h1>";
		console.log(error)
	});
}

// Function to define innerHTML for display [ RESULTS PAGE ]
function show(data) {
	let results =
		`<div class="card-columns">`;
	let i = 0;
	for (let r of data) {
		results += `
		<div class="card border-dark" >
			<img class="card-img-top" style="object-fit: contain;" src='${r.img}' alt="Card image cap">
			<div class="card-body">
				<h5 class="card-title">${r.name}</h5>
				<p class="card-text"> ${r.exr} </p>
				<a onclick="linkSender(event)" class="btn btn-outline-success my-2 my-sm-0" id="download-${i++}" data-record-id="${r.url}">GET LINK </a>
			</form>
			</div>
		</div>
		`;}

	// Setting innerHTML as tab variable
	document.getElementById("cards").innerHTML = results;

}

/////////////// SECOND API CALL  DOWNLOAD-PAGE  SECOND API CALL  DOWNLOAD-PAGE  SECOND API CALL /////////////

async function getlink(url) {
    // show loader
	document.getElementById('loading').classList.remove('hidden');
	const response = await fetch(url, {
		method: 'GET',
		headers: {
		'Content-Type': 'application/json'
		}
	})
	.then((response) => {
		if (response.ok) {
		  return response.json();
		} else {
		  throw new Error('Something went wrong');
		}
	})
	.then((responseJson) => {
		// Do something with the response
		document.getElementById('loading').classList.add('hidden');
		present(responseJson)
	})
	.catch((error) => {
		document.getElementById('loading').classList.add('hidden');
		document.getElementById("cards").innerHTML = "<h1> An error has occured, please try again. </h1>"
		console.log(error)
	});
}

// Function to define innerHTML for display [DOWNLOAD PAGE]
function present(data) {
	let tab =
		`
		<div class="card text-center">
		<div class="card-header"> Your Link is Ready </div>
	
		<ul class="list-group list-group-flush">
			<li class="list-group-item">${data.name}</li>
			<li class="list-group-item">${data.filesize}</li>
		</ul>
	
		<div class="card-body">
			<a class = "btn btn-primary" href = "${data.url}"> DOWNLOAD </a>
		</div>
		`;


	document.getElementById("cards").innerHTML = tab;
}
// download.html
function linkSender(e) {
	e = e || window.event;
	e.preventDefault();
	let x = e.currentTarget.dataset.recordId;
	const api_url = "https://polar-temple-04652.herokuapp.com/d/" + x;
	localStorage.setItem("myLink", api_url);
	window.location.href = "download.html";
}
