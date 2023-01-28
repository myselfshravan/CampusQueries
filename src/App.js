import * as React from "react";
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import {
  UserList,
  UserShow,
  UserCreate,
  UserEdit,
  calciList,
  calciShow,
  calciCreate,
  calciEdit,
} from "./users";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import MyPage from "./MyPage";
import Calci from "./Calci";
import Dashboard from "./Dashboard";
import MyLayout from "./MyLayout";
import Calculator from "./Calculator";

import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";

import firebase from "firebase/compat/app";
import styles from "./styles.css";

import UserIcon from "@material-ui/icons/People";
import CommentIcon from "@material-ui/icons/Comment";

import * as Posts from "./posts";
import * as Users from "./users";
import * as Comments from "./comments";

import CustomLoginPage from "./CustomLoginPage";
import EventMonitor from "./EventMonitor";

import { firebaseConfig } from "./FIREBASE_CONFIG";

const firebaseApp = firebase.initializeApp(firebaseConfig);

console.log({ firebaseConfig, firebaseApp });

import MyLoginPage from "./MyLoginPage";
const authProvider = FirebaseAuthProvider(firebaseConfig);
const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  app: firebaseApp,
  persistence: "local",
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});
// const MyPage = () => {
//   return <div>Something</div>;
// };

class App extends React.Component {
  render() {
    return (
      <>
        <Admin
          title="Campus Queries"
          loginPage={CustomLoginPage}
          // loginPage={MyLoginPage}
          dataProvider={dataProvider}
          authProvider={authProvider}
          layout={MyLayout}
          dashboard={Dashboard}
          // requireAuth
        >
          <Resource
            name="problems"
            list={PostList}
            show={PostShow}
            create={PostCreate}
            edit={PostEdit}
          />
          <Resource
            name="found"
            list={Posts.FoundList}
            show={Posts.FoundShow}
            create={Posts.FoundCreate}
            edit={Posts.FoundEdit}
          />
          <Resource
            name="lost"
            list={Posts.LostList}
            show={Posts.LostShow}
            create={Posts.LostCreate}
            edit={Posts.LostEdit}
          />
          <Resource
            name="users"
            icon={UserIcon}
            list={UserList}
            show={UserShow}
            create={UserCreate}
            edit={UserEdit}
          />
          <Resource
            name="comments"
            icon={CommentIcon}
            list={Comments.CommentsList}
            show={Comments.CommentShow}
            create={Comments.CommentCreate}
            edit={Comments.CommentEdit}
          />
          <Resource
            name="Blogs"
            list={Posts.BlogList}
            show={Posts.BlogShow}
            create={Posts.BlogCreate}
            edit={Posts.BlogEdit}
          />
          <Resource name="cinemas" list={Posts.BookList} />

          <CustomRoutes>
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/calculator" element={<Calculator />} />
          </CustomRoutes>
          {/* <CustomRoutes>
            <Route
              path="/foo"
              element={
                <Authenticated>
                  <MyPage />
                </Authenticated>
              }
            />
            <Route path="/anoonymous" element={<Baz />} />
          </CustomRoutes> */}
        </Admin>
        <EventMonitor />
      </>
    );
  }
}

export default App;
