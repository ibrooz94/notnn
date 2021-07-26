// api url
const api_url =
	"https://polar-temple-04652.herokuapp.com/s/felony";

	// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url)
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		</tr>`;
	
	tab += `<tr>
	<td>${data.name} </td>
	<td>${data.filesize}</td>
	<td><a href='${data.url}'> DOWN </a></td>		
	</tr>`;

// 	// Loop to access all rows
// 	for (let r of data) {
// 		tab += `<tr>
// 	<td>${r.name} </td>
// 	<td><img style='width:80px; height:80px;' src='${r.img}'> </td>
// 	<td>${r.exr}</td>
// 	<td><a href='${r.url}'> DOWN </a></td>		
// </tr>`;
// 	}
	
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
