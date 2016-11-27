

    // It will only fetch a a file as a string
    function load(path, callback){
		
		ajax("GET", path, function(response){
			
			callback(response);
			
		});
		
	}



	// It will send data to and url and get it back
    function send(path, data){
		
		ajax("POST", path, function(response){
			
			callback(response);
			
		}, data);
		
	}
	
	
	// Will change location with ajax and use pushstate to change url
	function locationChange(path, newUrl){
		
		
		
	}




function ajax(instruction, path, callback, data){
	
	// Create the request variable
	var xhttp = new XMLHttpRequest();
	
	
	
	// WHENEVER THE STATE CHANGES
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            
			// Give the response back to the function
			callback(xhttp.responseText);
        
		}
    };
    
	
    // THE THING THAT CONNTECTS TO THE DOCUMENT
	if(instruction == "GET"){
		
		xhttp.open(instruction, path, true);
		xhttp.send();
		
		return true;
	}
	else if(instruction == "POST"){

       	// The data
		var postData = new FormData();
        postData.append('ajax', data);
		
		// The actuall request
		xmlhttp.open("POST", url, true); // sends a the var q to the next php file
		xmlhttp.send(postData); // Sends the request with a variable

	    return true;
	}
	

	return false;
}
