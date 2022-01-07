const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log ('Welcome to the password validator')
reader.question("What password would you like to validate?", function(input){
	tokens = input.split(' ');
	
password = tokens[0];



	if (input.length > 10) {
    console.log ('Great password!')
  } else console.log ('Please try a longer password.')
	// This line closes the connection to the command line interface.
	reader.close()

});
