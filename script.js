
async function getTrend() {
	url = "https://polar-temple-04652.herokuapp.com/tr"

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
		  	throw new Error('Something went wrong');
		}
	})
	.then((responseJson) => {
		trend(responseJson);
	})
	.catch((error) => {
		document.getElementById("cards").innerHTML = "<h1> An error has occured, please try again. </h1>";
		console.log(error)
	});
}

function trend(data) {
	let results = ``;
	for (let r of data) {
		results += `
			<div class="item"> 
				<img src='${r.img}' data-record-id="${r.url}" onclick="linkSender(event)"/>
				<div class="item-title"> 
					<span> ${r.name} </apan>
				</div>
			</div>
		`;}

	// Setting innerHTML as tab variable
	document.getElementById("cards").innerHTML = results;

}

//////////////////////////////////////////////////////////
// Get form input [INDEX ]
function valueSender(){
	let x = document.getElementById("userinput").value;
	const api_url = "https://polar-temple-04652.herokuapp.com/s/" + x;
	localStorage.setItem("myValue", api_url);
	window.location.href = "results.html";
	// var b = localStorage.getItem("myValue");
	// getapi(b);
	}

// Defining async function for search
async function getapi(url) {
    // show loader
	// document.getElementById('loading').classList.remove('hidden');

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
			// document.getElementById('loading').classList.add('hidden');
		  	throw new Error('Something went wrong');
		}
	})
	.then((responseJson) => {
		// Do something with the response
		// document.getElementById('loading').classList.add('hidden');
		show(responseJson)
	})
	.catch((error) => {
		// document.getElementById('loading').classList.add('hidden');
		document.getElementById("cards").innerHTML = "<h1> An error has occured, please try again. </h1>";
		console.log(error)
	});
}

// Function to define innerHTML for display [ RESULTS PAGE ]
function show(data) {
	let results =
		``;
	if(data.length == 0){
		return document.getElementById("cards").innerHTML = "<h3> Nothing to see here </h3>";
	}
	console.log(data);
	for (let r of data) {
		results += `
		<div class="item"> 
			<img src='${r.img}' data-record-id="${r.url}" onclick="linkSender(event)"/>
			<div class="item-title"> 
				<span> ${r.name} </apan>
			</div>
		</div>
		`;}

	// Setting innerHTML as tab variable
	return document.getElementById("cards").innerHTML = results;

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
	// var b = localStorage.getItem("myLink");
	// getlink(b);
}
