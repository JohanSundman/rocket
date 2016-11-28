

    // The brain of the project
    function launch(){
		
		// Change the environment to the rocket voyage launch thing
		roomToggle(1);
		
		
		// Get the time everything started
		
		
		// Call the
		
		
		// 
		
		
	}
	
	
	
	
	
	
	
	function roomToggle(state){
		/*
		 *  STATE LIST
		 *	1 = The rocket building phase
		 *	2 = the rocket voage
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
	
	
	function toggleOptions(state){
		/*
		 *  STATE LIST
		 *	1 = Show options
		 *	2 = Hide options
		 */
		switch(state){
			case 1:
				document.getElementById("options").style.display = "block";
				// Some functions to stop
			    break;
			case 2:
			default:
				document.getElementById("options").style.display = "none";
				// Some functions to start
			break;
		}
	}