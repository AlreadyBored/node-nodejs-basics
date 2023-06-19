const parseEnv = () => {
    const result = [];
    const input = Object.entries(process.env).forEach(i => {if(i[0].startsWith('RSS_')) result.push(`${i[0]} = ${i[1]}`)});
    console.log(result.join('; '));
};

parseEnv();