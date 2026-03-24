import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "901924191591-v8a63ql529etr8afdbcmuu8r524bnbqi.apps.googleusercontent.com", // 👈 ESTE ES EL IMPORTANTE
    responseType: "token",
  });

  return { request, response, promptAsync };
};
