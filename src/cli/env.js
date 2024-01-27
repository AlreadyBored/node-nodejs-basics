//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#command-line-interfacesrccli

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
