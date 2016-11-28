
// The option button
function keypress(e){
	if(e.keyCode === 111){
		optionCaller(); // Will handle the options function
	}
}








// Calls the options
function optionCaller(){
	var state;
	if(game.options){ 
		state = 2; 
		game.options = false; 
	}
	else{ 
		state = 1;
		game.options = true; 
	}
	toggleOptions(state);
}