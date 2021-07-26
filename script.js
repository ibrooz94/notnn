	// Defining async function
async function getapi(url) {
    // show loader
	document.getElementById('loading').classList.remove('hidden');

	// Storing response
	const response = await fetch(url)
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		// to hide the loader
		document.getElementById('loading').classList.add('hidden');
	}
	show(data);
}

// Calling that async function
document.getElementById('aform').addEventListener('submit', function(e){
	e.preventDefault()
	let x = document.getElementById("input").value;
	const api_url = "https://polar-temple-04652.herokuapp.com/s/" + x;
	getapi(api_url)
})

// Function 
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<div class="card-columns">`;
	
	for (let r of data) {
		tab += `
		<div class="card border-dark" >
			<img class="card-img-top" style="object-fit: contain;" src='${r.img}' alt="Card image cap">
			<div class="card-body">
				<h5 class="card-title">${r.name}</h5>
				<p class="card-text"> ${r.exr} </p>
			</div>
		<form method="post" id="download" class="form-inline">
			<input type="hidden" id="url" name="url" value="${r.url}">
			<button class="btn btn-outline-success my-2 my-sm-0" type="submit">GET LINK</button>
		</form>
		</div>
		`;
	}

	// Setting innerHTML as tab variable
	document.getElementById("cards").innerHTML = tab;
}

///////////////////////////////////////////////////////////

// async function getlink(url) {
// 	// Storing response
// 	const response = await fetch(url)
	
// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	present(data);
// }

// document.getElementById('download').addEventListener('submit', function(e){
// 	e.preventDefault()
// 	console.log("we here ")
// 	let x = document.getElementById("url").value;
// 	const link_url = "https://polar-temple-04652.herokuapp.com/d/" + x;
// 	getlink(link_url)
// })

// function present(data) {
// 	let tab =
// 		`
// 		<div class="card text-center">
// 		<div class="card-header">
// 			Your Link is Ready 
// 		</div>
	
// 		<ul class="list-group list-group-flush">
// 			<li class="list-group-item">${data.name}</li>
// 			<li class="list-group-item">${data.filesize}</li>
// 		</ul>
	
// 		<div class="card-body">
// 			<a class = "btn btn-primary" href = "${data.url}"> DOWNLOAD </a>
// 		</div>

// 	  </div>
// 		`;


// 	document.getElementById("cards").innerHTML = tab;
// }

