# k6 Load Test

## Overview

This project uses [k6](https://k6.io/) for load testing APIs. Easily configure endpoints and run performance tests.

## How to Run

1. **Install k6**  
    ```bash
    brew install k6
    ```
    or  
    [Download from k6.io](https://k6.io/docs/getting-started/installation/)

2. **Run a Test**  
    ```bash
    k6 run tests/stress.js
    ```
    Replace `script.js` with your test file.

## Configuring Endpoints & Tests

- Edit or create a `.js` file (e.g., `script.js`).
- Example:
  ```js
  import http from 'k6/http';
  import { sleep } from 'k6';

  export default function () {
     http.get('https://your-api.com/endpoint');
     sleep(1);
  }
  ```
- Add more endpoints or logic as needed.

## Customizing Load

- Set number of virtual users and duration:
  ```bash
  k6 run --vus 10 --duration 30s script.js
  ```

## Results

After running, k6 shows metrics like requests per second, response times, and errors (see image above).

---

For advanced configuration, see [k6 documentation](https://k6.io/docs/).