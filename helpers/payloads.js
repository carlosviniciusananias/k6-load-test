export function generatePolicyPayload() {
    return {
        Domain: "Fulfillment",
        OrderId: "1608280551438-01",
        State: "invoiced",
        LastState: "invoiced",
        LastChange: "2025-06-23T17:11:39.2550122Z",
        CurrentChange: new Date().toISOString(),
        Origin: {
            Account: "your-account",
            Key: "your-app-key",
        },
    };
}
