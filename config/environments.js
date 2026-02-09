const ENV = __ENV.ENV || "staging";

const environments = {
    local: {
        baseUrl: "http://localhost:3000",
    },
    staging: {
        baseUrl: "https://beta-api.com",
    },
    prod: {
        baseUrl: "https://api.com",
    },
};

export default environments[ENV];
