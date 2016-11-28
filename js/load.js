/*

    All the variables are laoded here

*/

    // Game information
	var game = {
		options: false
	};


    // Every meta
	var meta = new Object();
	
	    // All the meta "types"
	    meta.rocket = new Object();
	    
	    
	        // The rocket Files
	        meta.rocket.head = new Object();
	            // The head object
	        	meta.rocket.head.path = "rocket-meta/rocket-head.json";
	        	meta.rocket.head.json = false;
	        	meta.rocket.head.getJson = function(){
	        		
	        		load(this.path, function(response){
	        			meta.rocket.head.json = response
	        		});
	        	    
	        		return true;
	        	};
	            meta.rocket.head.fetched = meta.rocket.head.getJson();
	        		
	        		
	        
	        meta.rocket.body = new Object();
	            // The body object
	        	meta.rocket.body.path = "rocket-meta/rocket-body.json";
	        	meta.rocket.body.json = false;
	        	meta.rocket.body.getJson = function(){
	        		
	        		load(this.path, function(response){
	        			meta.rocket.body.json = response
	        		});
	        	    
	        		return true;
	        	};
	            meta.rocket.body.fetched = meta.rocket.body.getJson();
	        		
	        		
	        		
	        meta.rocket.engine = new Object();
	            // The engine object
	        	meta.rocket.engine.path = "rocket-meta/rocket-engine.json";
	        	meta.rocket.engine.json = false;
	        	meta.rocket.engine.getJson = function(){
	        		
	        		load(this.path, function(response){
	        			meta.rocket.engine.json = response
	        		});
	        	    
	        		return true;
	        	};
	            meta.rocket.engine.fetched = meta.rocket.engine.getJson();
	
	
	
	
	
	
	
	// THE ACTUAL ROCKET!!
	var rocket = new Object();
	
	
	    // All the rocket parts
	    rocket.part = new Object();
		
		    rocket.part.head = null;
			rocket.part.body = null;
	        rocket.part.engine = null;
			
			
			
		// All the rocket rendering info
		rocket.render = new Object();
	
	        rocket.render.head = new Object();
	            rocket.render.head.img = null;
			
			rocket.render.body = new Object();
			    rocket.render.head.img = null;
			
			rocket.render.engine = new Object();
			    rocket.render.engine.img = null;
				
				
	
	    // All the rocket info
		rocket.info = new Object();
	
	        rocket.info.weight = null;
			rocket.info.fuel = null;
			rocket.info.distance = null;
			
			
			
			