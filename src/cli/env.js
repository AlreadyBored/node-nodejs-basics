import { env, stderr, stdout } from "process";

export const parseEnv = () => {
  try {
    stdout.write(`\t\t\t -----THE LIST OF THE ENVIROMENT'S PROPERTIES----- \n`);
      for (let property in env) {
       stdout.write(`RSS_${property}=${env[property]} \n`);
    };  
  }
  catch(err) {
     stderr.write(`ERROR>>> It is incredably, but something gets wrong... \n ${err.message} \n`);
  };
};

//parseEnv();