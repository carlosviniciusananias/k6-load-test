import http from "k6/http";
import env from "../config/environments.js";
import { generatePolicyPayload } from "../helpers/payloads.js";

export function GeneratePolicy() {
    const payload = generatePolicyPayload();

    return http.post(`${env.baseUrl}/_v/notify-order`, JSON.stringify(payload));
}
