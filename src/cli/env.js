import { env } from "node:process";

/*
to test this function you can execute(tested on windows, powershell):
 > $env:RSS_name1="value1"; $env:RSS_name2="value2"; $env:RSS_name3="another_value"

to remove previously declared variables execute:
 > $env:RSS_name1=''; $env:RSS_name2=''; $env:RSS_name3=''
*/

const parseEnv = () => {
  const keyPrefix = "RSS_";

  const varNames = Object.keys(env).filter((key) => key.startsWith(keyPrefix));
  const varPairs = varNames.map((name) => `${name}=${env[name]}`);
  const result = varPairs.join("; ");

  console.log(result);
};

parseEnv();
