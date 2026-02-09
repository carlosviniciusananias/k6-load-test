const ENV = __ENV.ENV || "staging";

const environments = {
    local: {
        baseUrl: "http://localhost:3000",
    },
    staging: {
        baseUrl: "https://mapfre--americanasqa.myvtex.com",
    },
    prod: {
        baseUrl: "https://api.com",
    },
};

export default environments[ENV];
