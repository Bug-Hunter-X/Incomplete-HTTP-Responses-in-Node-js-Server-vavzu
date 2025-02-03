# Incomplete HTTP Responses in Node.js
This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` in the request handler.  This leads to incomplete or hanging HTTP responses, causing issues for clients.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides the corrected version. 