import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthnticating] = useState();
  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthnticating(true);
    try {
      const token = await createUser(email, password);
      // set token
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Failed!!",
        "Please check yoour input and try again later"
      );
      setIsAuthnticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
