conconst parseEnv = () => {
	console.log("Parsing env vars...");
	// Access such variables
	const envVars = process.env;

	// Sort out those with "RSS_" prefix
	const rssVars = Object.entries(envVars)
		.filter(([key, value]) => key.startsWith('RSS_'));

	// Prints as requested
	rssVars.forEach(([key, value]) => {
		console.log(`RSS_${key}=${value}`);
	});
};

parseEnv();

/* env.js - implement function that parses environment variables with prefix RSS_
 * and prints them to the console in the format RSS_name1=value1; RSS_name2=value2 */
