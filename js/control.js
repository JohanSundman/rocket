

    // The brain of the project
    function launch(){
		
		// Change the environment to the rocket voyage launch thing
		roomToogle(1);
		
		
		// Get the time everything started
		
		
		// Call the
		
		
		// 
		
		
	}
	
	
	
	
	
	
	
	function roomToogle(state){
		// Different states for different rooms
		/*
		    STATE LIST
			1 = The rocket building phase
			2 = the rocket voage
		
		*/
		
		switch(state){
			
			case 1:
			    // The launch
				document.getElementById("launch").style.display = "block";
			    document.getElementById("build").style.display = "none";
			
			    break;
			case 2:
			default:
				// The build room
				document.getElementById("launch").style.display = "none";
			    document.getElementById("build").style.display = "block";
				
			break;
		}
		
		
		
		
		
		
	}