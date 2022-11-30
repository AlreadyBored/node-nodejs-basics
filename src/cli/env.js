const parseEnv = () => {
    process.env.RSS_test = 'testValue';
    process.env.RSS_testAgain = 'testValueAgain';
    let output = "";

    for (let variable in process.env) {
      variable.slice(0,4) === "RSS_" ? output += `${variable}=${process.env[variable]}; ` : variable;
    };
    console.log(output);
};

parseEnv();