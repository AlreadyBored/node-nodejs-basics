import fs from 'fs';
export const parseEnv = () => {
    const dataArr = [];
    const res = [];
    fs.readFile('./.env', (err, data) => {
       if(err) console.log(err);
        dataArr.push(data.toString());
        dataArr.forEach(text => {
            const result = text.split(/\r?\n/);
            result.forEach(line => res.push("RSS_" + line));
        })
        console.log(res.toString());
    });
};
parseEnv();