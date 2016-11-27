/*

    Load all the parts
	
	the div id="workshop-display" is the target container

*/




    // fetch all the heads
    function getWorkshop(type){
		
		// Get the target element
		var target = document.getElementById("workshop-display");
		
		// Clear the old results
		target.innerHTML = "";
		
		
		// Decode the json
		switch(type){
			
			case "head":
			    var parts = JSON.parse(meta.rocket.head.json);   // Get the head json and make it into an object
			    break;
			
			case "body":
			    var parts = JSON.parse(meta.rocket.body.json);   // Get the body json and make it into an object
			    break;
				
			case "engine":
			    var parts = JSON.parse(meta.rocket.engine.json); // Get the engine json and make it into an object
			    break;
				
				
			default:
			    var parts = new Object(); // Just an empty object
		}
		
		
		
		// Loop them all and insert them into the display area
		for(var key in parts){
			
			console.log(key);
			console.log(parts[key]["part"]);
			
			// Check if the part is actually the right type
			if(parts[key]["part"] != type){
				continue; // Next object
			}
			
			
			
			// Create the part element
			var container = document.createElement("div");
			container.className = "part-container"; // Set the class
			container.dataset.name = key; // Assign the name in the data property
			container.dataset.type = type; // Assign the name in the data property
			container.addEventListener("click", changePart); // Set the event listener
			
			
			
			// Create the name text
			var nameElement = document.createElement("p");
			nameElement.className = "part-heading";
			
			
			// create the text inside the header
			var name = key;
			var nameNode = document.createTextNode(name);
			
			
			
			// Assemble the nodes
			nameElement.appendChild(nameNode); // Add the text to the p
			container.appendChild(nameElement); // Add the p to the container
			
			target.appendChild(container); // Add the container to the target
			
		}
		
	}
	
	
	
	
	
	function changePart(e){
		
		
        // get the type of the part and use it do decide which json object that is needed
		switch(this.dataset.type){
			
			case "head":
			    var parts = JSON.parse(meta.rocket.head.json);   // Get the head json and make it into an object
			    break;
			
			case "body":
			    var parts = JSON.parse(meta.rocket.body.json);   // Get the body json and make it into an object
			    break;
				
			case "engine":
			    var parts = JSON.parse(meta.rocket.engine.json); // Get the engine json and make it into an object
			    break;
				
				
			default:
			    var parts = new Object(); // Just an empty object
		}
		
		
		// Updatate the ROCKET OBJECT
		
		    // EXAMPLE parts[this.dataset.name]["json property"]
		console.log(parts[this.dataset.name]["weight"]);
		
		switch(this.dataset.type){
			
			case "head":
			    
				// Update the part
				rocket.part.head = parts[this.dataset.name][""];
				
				// Update the image
				rocket.render.img = parts[this.dataset.name]["img"];
				
			    break;
			
			case "body":
			    
				
				
			    break;
				
			case "engine":
			    
				
				
			    break;
				
				
			default:
			    
				return false; // Will stop the function execution
		}
		
		
		hangar_render(); // Will update the rocket that is being displayed in the hangar
		
	}
	
	
	