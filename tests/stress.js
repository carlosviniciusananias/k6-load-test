import { GeneratePolicy } from "../helpers/endpoints.js";
import { sleep } from "k6";

export const options = {
    stages: [
        { duration: "30s", target: 5 },
        { duration: "30s", target: 15 },
        { duration: "30s", target: 25 },
        { duration: "30s", target: 35 },
        { duration: "30s", target: 50 },
    ],
};

export default function () {
    GeneratePolicy();
    sleep(1);
}
