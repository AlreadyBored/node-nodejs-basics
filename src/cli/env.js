/*
* implement function that parses environment variables with prefix RSS_ and prints them to the console
* in the format RSS_name1=value1; RSS_name2=value2
*/

const parseEnv = () => {
	const result = Object.keys(process.env)
	.filter(key => key.substring(0, 3) === 'RSS')
	.map((key) => `${key}=${process.env[key]}`);

	console.log(result);
};

parseEnv();