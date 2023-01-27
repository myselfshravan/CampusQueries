// LoginPage.js
import React from "react";
import { Login, LoginForm } from "react-admin";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import ForgotPasswordButton from "./CustomForgotPassword";
import styles from "./styles.css";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "#/posts",
  // Optional callbacks in order to get Access Token from Google,Facebook,... etc
  callbacks: {
    signInSuccessWithAuthResult: (result) => {
      const credential = result.credential;
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const accessToken = credential.accessToken;
      console.log({ result, user, accessToken });
    },
  },
};

const SignInScreen = () => (
  <StyledFirebaseAuth firebaseAuth={firebase.auth()} uiConfig={uiConfig} />
);
<link
  href="https://fonts.googleapis.com/css?family=Open Sans"
  rel="stylesheet"
></link>;
const CustomLoginForm = (props) => (
  <div>
    <LoginForm {...props} />
    <SignInScreen />
    <ForgotPasswordButton {...props} />
  </div>
);
const LoginPage = ({ theme }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const submit = (e) => {
    e.preventDefault();
    login({ email, password }).catch(() => notify("Invalid email or password"));
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={submit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <Notification />
    </ThemeProvider>
  );
};

const CustomLoginPage = (props) => (
  <Login
    {...props}
    backgroundImage="https://cdn.wallpapersafari.com/80/94/AC21PJ.jpg"
  >
    <CustomLoginForm {...props} />
    {/* <LoginPage /> */}
  </Login>
);

export default CustomLoginPage;
