process.env.RSS_Test = 1; // test variable

const parseEnv = () => {
    const prefix = 'RSS_';
    const filteredVariables = Object.keys(process.env).filter(key =>
      key.startsWith(prefix)
    );
    if (filteredVariables.length === 0) {
      console.log('No RSS variables found.');
      return;
    }
    const formattedVariables = filteredVariables.map(key =>
      `RSS_${key.substr(prefix.length)}=${process.env[key]}`
    );
    console.log(formattedVariables.join('; '));
};

parseEnv();