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
		for(var item in parts){
			
			// Check if the part is actually the right type
			if(parts[item]["part"] != type){
				continue; // Next object
			}
			
			// Will build the item // ( name, ) 
			render_workshop_item(target, item, parts[item]["img-path"], type);
		}
		
	}
	
	
	
	
	// When a part is clicked
	function changePart(e){
		
		switch(this.dataset.type){
			case "head":
				// Update the part
				rocket.part.head = this.dataset;
				
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
	
	
	