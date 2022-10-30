import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// just for tests
// /api/hello
export const helloWorld =
    functions.https.onRequest(async (request, response) => {
      await (await import("./hello.js")).default(request, response);
    });
