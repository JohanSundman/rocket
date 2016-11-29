


// Will build the workshop items
function render_workshop_item(target, name, imgPath, type){
	
	// Create the part element
	var container = document.createElement("div");
		container.className = "part-container"; // Set the class
		container.dataset.name = name; // Assign the name in the data property
		container.dataset.type = type; // Assign the name in the data property
		container.addEventListener("click", changePart); // Set the event listener
	
	
	// Create the name text
	var nameElement = document.createElement("h3"); // The name element
		nameElement.className = "part-name";
	var nameNode = document.createTextNode(name); // The name text
	nameElement.appendChild(nameNode); // Add the text to the element
	
	// Create the display image
	var imgElement = document.createElement("img");
		imgElement.className = "part-image";
		imgElement.src = imgPath;
	
	// Assemble the nodes
	container.appendChild(nameElement); // Add the p to the container
	container.appendChild(imgElement); // Add the image to the container
	
	target.appendChild(container); // Add the container to the target
}