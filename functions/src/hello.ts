import * as functions from "firebase-functions";

export default async (
    request: functions.https.Request,
    response: functions.Response
): Promise<void> => {
  functions.logger.info("Hello logs!", {structuredData: true});
  functions.logger.info(request, {structuredData: true});
  response.json({message: "Hello from Firebase!", yourIp: request.ip});
};
