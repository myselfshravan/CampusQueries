// LoginPage.js
import React from "react";
import { Login, LoginForm } from "react-admin";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import ForgotPasswordButton from "./CustomForgotPassword";
import styles from "./styles.css";

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  signInSuccessUrl: "#/posts",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: (result) => {
      const credential = result.credential;
      const user = result.user;
      const accessToken = credential.accessToken;
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
    <div
      style={{ fontFamily: "Open Sans", textAlign: "center", margin: "10px" }}
    >
      <p>
        <b>Note:</b> <br></br>
        <i style={{ color: "red" }}>Refresh the page after Signing </i>
      </p>
    </div>
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
