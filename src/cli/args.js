/*
* implement function that parses command line arguments (given in format --propName value --prop2Name value2,
* you don't need to validate it) and prints them to the console in the format 
* propName is value, prop2Name is value2
*/

const parseArgs = () => {
	let result = "";
	process.argv.slice(2).forEach(val => {
		if (val.substring(0, 2) === "--") {
			result += val.substring(2) + " is ";
		} else {
			result += val + ", ";
		}
	});
	if (result[result.length - 2] === ",") {
		result = result.substring(0, result.length - 2);
	}

	console.log(result);
};

parseArgs();