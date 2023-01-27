import * as React from 'react';
import { Layout } from 'react-admin';
import MyAppBar from './MyAppBar';
import { MyMenu } from './Menu';
// import ResponsiveAppBar from './ResponsiveAppBar';

const MyLayout = (props) => (
  <Layout {...props} appBar={MyAppBar} menu={MyMenu} />
);

export default MyLayout;
