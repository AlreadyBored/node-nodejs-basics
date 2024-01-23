//Implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
const PREFIX = "RSS_";

const parseEnv = () => {
  let result = "";
  for (const env in process.env) {
    if (env.startsWith(PREFIX)) {
      result += `${env}=${process.env[env]}; `;
    }
  }
  result = result.trim();
  result.endsWith(";") ? console.log(result.slice(0, -1)) : console.log(result);
};

parseEnv();
