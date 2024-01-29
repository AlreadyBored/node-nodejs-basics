import process from 'process'

const parseEnv = () => {
    console.log("RSS_foo=" + process.env.RSS_foo + "; " + "RSS_bar=" + process.env.RSS_bar);

};

parseEnv();
