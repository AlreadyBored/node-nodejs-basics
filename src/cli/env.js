const parseEnv = () => {
     const allVars = process.env;
     const prefix = 'RSS_';
     const entries = Object.entries(allVars)
     for (let i = 0; i<entries.length; i++) {
          if (entries[i][0].startsWith(prefix)) {
               console.log(`${prefix}_${entries[i][0]}=${entries[i][1]}`)
          }
     }
};

parseEnv();
